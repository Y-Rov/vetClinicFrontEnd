import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder} from "@microsoft/signalr"
import { HttpClient } from '@angular/common/http'
import { map, Observable, Subject, tap } from 'rxjs';
import { Chat } from 'src/app/core/models/Chat';
import { MessageGet } from 'src/app/core/models/Messages/MessageGet';
import { MessageSend } from 'src/app/core/models/Messages/MessageSend';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private hubConnection: HubConnection;

  private baseUrl: string = 'https://localhost:5001'
  private hubUrl: string = `${this.baseUrl}/hubs/messages`;
  private messagesApiUrl: string = `${this.baseUrl}/api/messages`;
  private chatsApiUrl: string = `${this.baseUrl}/api/chats`;
  private unreadMessagesCount: number = 0;


  public unreadMessageRegistry: Map<number, MessageGet[]> = new Map();
  public getMessage$ : Subject<MessageGet> = new Subject<MessageGet>();

  constructor(
    private http: HttpClient
  ) 
  {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl).build();

    this.connectToServer();
    this.listenMessages();
  }

  public get numberOfUnreadMessages(){
    return this.unreadMessagesCount;
  }

  public getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsApiUrl)
  }

  public getUnreadMessages(): Observable<MessageGet[]> {
    return this.http.get<MessageGet[]>(this.messagesApiUrl).pipe(
      // save to message registry
      tap(messages => {
        this.unreadMessagesCount = messages.length;
        messages.forEach(m => {
          this.unreadMessageRegistry.get(m.chatRoomId!)?.push(m)
        })
      })
    )
  }

  public getMessagesInChatRoom(chaRoomId: number, skip: number, take: number) {
    const url: string = `${this.messagesApiUrl}/${chaRoomId}/${skip}/${take}`;
    return this.http.get<MessageGet[]>(url);
  }

  public sendMessage(message: MessageSend): Promise<void> {
    return this.hubConnection.send("SendPrivateMessage", message)
  }

  public readMessage(message: MessageGet): Promise<void> {
    let indexOfMessage = this.unreadMessageRegistry
      .get(message.chatRoomId!)
      ?.findIndex(m => m.id === message.id);

    this.unreadMessageRegistry.get(message.chatRoomId!)
      ?.splice(indexOfMessage!, 1)

    return this.hubConnection.send('ReadMessage', message.id);
  }

  private listenMessages(): void {
    this.hubConnection.on('getMessage', (message) => {
      console.log(message);
      this.unreadMessagesCount++;
      this.getMessage$.next(message);
    });
  }

  private connectToServer(): void {
    this.hubConnection
      .start()
      .then(() => console.log('Connection has been established'))
      .catch(err => console.log('Error while trying to connect to SignalR server: ' + err))
  }
}
