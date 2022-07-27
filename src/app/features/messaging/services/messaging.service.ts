import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder} from "@microsoft/signalr"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { Chat } from 'src/app/core/models/Chat';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { ResourceService } from 'src/app/core/services/resourceService/resource.service';
import { Message } from 'src/app/core/models/Message';
import { UserService } from '../../userDashboard/services/userService/user.service';


@Injectable({
  providedIn: 'root'
})
export class MessagingService{

  private hubConnection: HubConnection | undefined;

  private baseUrl: string = 'https://localhost:5001'
  private hubUrl: string = `${this.baseUrl}/hubs/messages`;
  private messagesApiUrl: string = `${this.baseUrl}/api/messages`;
  private chatsApiUrl: string = `${this.baseUrl}/api/chats`;
  private unreadMessagesCount: number = 0;
  private _selectedChat: Chat | undefined;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public unreadMessageRegistry: Map<number, Message[]> = new Map();
  public chats: Chat[] | undefined;
  public getMessage$ : Subject<Message> = new Subject<Message>();

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService)
  { }

  public connectToSignalRServer(): void {
    let url = `${this.hubUrl}?access_token=${this.authService.getAccessToken()}`;
    this.hubConnection = new HubConnectionBuilder()
    .withUrl(url)
    .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection has been established'))
      .catch(err => this.handleError('Connect to SignalR server', err));

    this.listenMessages();
    this.getUnreadMessages().subscribe();
  }

  public disconnectFromSignalRServer(): void {
    if (this.hubConnection){
      this.hubConnection.stop();
    }
    this.selectedChat = undefined;
    this.chats = undefined;
    this.unreadMessageRegistry = new Map();
    this.unreadMessagesCount = 0;
  }

  public get numberOfUnreadMessages(){
    return this.unreadMessagesCount;
  }

  public set selectedChat(chat : Chat | undefined) {
    this._selectedChat = chat;
  }
  public get selectedChat(): Chat | undefined {
    return this._selectedChat;
  }

  public getNumberOfUnreadMessages(chatId: number) {
    return this.unreadMessageRegistry.get(chatId)?.length;
  }

  public getUnreadMessagesInChat(chatId: number) {
    return this.unreadMessageRegistry.get(chatId);
  }

  public getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsApiUrl).pipe(
      tap(chats => this.chats = chats),
      catchError(err => this.handleError('get chats', err))
    );
  }

  public getUnreadMessages(): Observable<Message[]> {
    const url = `${this.messagesApiUrl}/unread`;
    return this.http.get<Message[]>(url).pipe(
      tap(messages => this.saveRangeToRegistry(messages)),
      catchError(err => this.handleError('Get unread messages', err))
    )
  }

  public getMessagesInChatRoom(chaRoomId: number, skip: number, take: number) : Observable<Message[]>{
    const url: string = `${this.messagesApiUrl}/${chaRoomId}/${skip}/${take}`;
    return this.http.get<Message[]>(url)
      .pipe(
        catchError(err => this.handleError(`Get messages in chat room #${chaRoomId}`, err)),
      );
  }

  public sendMessage(message: Message) : Observable<Message> {
    return this.http.post<Message>(this.messagesApiUrl, message, this.httpOptions)
      .pipe(
        tap(_ => this.ensureChatCreatedWhenSend(message)),
        catchError(err => this.handleError('Send message', err))
      );
  }

  public readMessage(message: Message): Observable<void> {
    const url = `${this.messagesApiUrl}/read/${message.id}`;
    return this.http.post<void>(url, this.httpOptions).pipe(
      catchError(err => this.handleError(`Read message #${message.id}`, err)),
      // remove from unread messages registry
      tap(_ => this.removeFromRegistry(message))
    );
  }

  private listenMessages(): void {
    this.hubConnection?.on('getMessage', (message) => {
      this.ensureChatCreatedWhenGet(message);
      this.saveOneToRegistry(message);
      this.getMessage$.next(message);
    });
  }

  private saveRangeToRegistry(messages: Message[]): void {
    messages.forEach(m => this.saveOneToRegistry(m))
  }
  
  private saveOneToRegistry(message: Message): void {
    this.unreadMessagesCount++;
    if(this.unreadMessageRegistry.has(message.chatRoomId!)) {
      this.unreadMessageRegistry.get(message.chatRoomId!)?.push(message);
    }
    else {
      let unreadMessages: Message[] = [message];
      this.unreadMessageRegistry.set(message.chatRoomId!, unreadMessages);
    }
  }

  private ensureChatCreatedWhenSend(message: Message): void {
    let chat = this.selectedChat;
    if (chat){
      if (!this.chats?.map(c => c.interlocutorId).includes(message.receiverId)){
        this.chats?.push(chat);
      }
    }
  }

  private ensureChatCreatedWhenGet(message: Message): void {
    let chat = this.chats?.find(c => c.interlocutorId == message.senderId);
    if (!chat){
      this.userService.getById(message.senderId!).subscribe(user => {
        chat = new Chat({
          id: message.chatRoomId,
          name: `${user.firstName} ${user.lastName}`,
          interlocutorId: message.senderId,
          picture: user.profilePicture
        })
        this.chats?.push(chat);
      })
    }
    else {
      if (!chat.id)
        chat.id = message.chatRoomId
    }
  }

  private removeFromRegistry(message: Message): void {
    this.unreadMessagesCount--;
    let unreadMessages = this.unreadMessageRegistry.get(message.chatRoomId!);
    if (unreadMessages){
      unreadMessages = unreadMessages.filter(m => m.id != message.id);
      this.unreadMessageRegistry.set(message.chatRoomId!, unreadMessages);
    }
  }

  private handleError(action: string, err: any){
    console.log(`Error while trying to ${action}. ${err}`);
    return throwError(err);
  }
}
