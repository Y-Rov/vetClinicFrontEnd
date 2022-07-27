import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { Message } from 'src/app/core/models/Message';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.sass']
})
export class ChatWindowComponent implements OnInit {

  private messagesToTake: number = 20;

  @Input() chat?: Chat;
  @ViewChild('messagesContainer') viewportRef!: ElementRef;

  skip: number = 0;
  leftUntilLoad: number = 0;
  hasReadToEnd: boolean = false;
  scrollY: number = 0;
  messageText: string = '';
  scrolledToBottom: boolean = false;

  private _changeDetectionRef: ChangeDetectorRef;
   
  constructor(
    private messagingService: MessagingService,
    public authService: AuthService,
    private changeDetectionRef: ChangeDetectorRef
  ) { 
    this._changeDetectionRef = changeDetectionRef;
  }

  ngOnInit(): void 
  {  
    this.messagingService.getMessage$.subscribe(message => {
      this.onGetMessage(message);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chat != undefined){
      // load messages from unread messages registry if they exist
      this.scrolledToBottom = false;
      this.hasReadToEnd = false;
      this.chat.messages = [];
      let messages = this.messagingService.unreadMessageRegistry.get(this.chat.id!)
      if (messages){
        this.chat.messages = this.chat.messages.concat(messages);
      }
      this.skip = messages?.length ?? 0;
      
      // load last 20 read messages
      this.loadMessages();
    }
  } 

  ngAfterViewChecked() {
    if (!this.scrolledToBottom && this.chat?.messages?.length != 0){
      this.setScrollTop(this.scrollHeight);
      this.scrolledToBottom = true;
    }
  }

  onGetMessage(message: Message) {
    this.chat?.messages?.push(message);
    this._changeDetectionRef.detectChanges();
    this.setScrollTop(this.scrollHeight);
  }

  onSendMessage(messageText: string) {
    if (this.chat != undefined && messageText.trim()){
      var messageSend: Message = new Message({
        text: messageText,
        receiverId: this.chat.interlocutorId
      });
      this.messagingService.sendMessage(messageSend).subscribe( response => {
        this.messageText = '';
        let message = new Message ({
          text: messageText, 
          senderId: this.authService.getUserId(),
          chatRoomId: this.chat?.id!
        });
        this.chat?.messages?.push(message);
        this._changeDetectionRef.detectChanges();
        this.setScrollTop(this.scrollHeight);
      })
    }
  }

  get scrollHeight(): number {
    return this.viewportRef.nativeElement.scrollHeight;
  }

  get scrollTop(): number {
    return this.viewportRef.nativeElement.scrollTop;
  }

  private setScrollTop(currentScrollTop: number): void {
    this.viewportRef.nativeElement.scrollTop = currentScrollTop;
  }

  onReadMessage(message: Message){
    var unreadMessages = this.messagingService.unreadMessageRegistry.get(this.chat?.id!);
    if (unreadMessages?.map(m => m.id).includes(message.id)){
      this.messagingService.readMessage(message).subscribe();
    }
    else {
      if(this.chat?.messages 
          && message.id === this.chat.messages[0].id 
          && !this.hasReadToEnd) {
        this.loadMessages();
      }
    }
  }
  
  private loadMessages() {
    if (this.chat?.id != undefined){
      this.messagingService.getMessagesInChatRoom(this.chat.id, this.skip, this.messagesToTake).subscribe(messages => {
        
        var preScrollHeight = this.scrollHeight;

        const length = messages.length;
        if (length != 0)
          this.chat?.messages?.unshift(...messages.reverse());

        this._changeDetectionRef.detectChanges();

        var postScrollHeight = this.scrollHeight; 
        
        if (preScrollHeight != postScrollHeight) {
          var delta = ( postScrollHeight - preScrollHeight );
          this.setScrollTop(delta);   
        }

        if (length < this.messagesToTake)
          this.hasReadToEnd = true;
        
        this.skip += length;
      });
    }
  }
}
