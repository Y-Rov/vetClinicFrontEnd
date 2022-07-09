import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { MessageGet } from 'src/app/core/models/Messages/MessageGet';
import { MessageSend } from 'src/app/core/models/Messages/MessageSend';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.sass']
})
export class ChatWindowComponent implements OnInit {

  @Input() chat?: Chat;

  skip: number = 0;
  leftUntilLoad: number = 0;
  messageText: string = '';
   
  constructor(
    private messagingService: MessagingService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.chat != undefined){
      // load messages from unread messages registry if they exist
      this.chat.messages.push(
        ...this.messagingService.unreadMessageRegistry.get(this.chat?.id!)!
      )
      this.leftUntilLoad = this.chat.numberOfUnreadMessages;
      this.skip = this.chat.numberOfUnreadMessages;
      // load last read 20 messages
      this.loadMessages();
    }
  }

  onSendMessage(messageText: string) {
    if (this.chat != undefined && messageText.trim()){
      var messageSend: MessageSend = new MessageSend(messageText, this.chat.interlocutorId!)
      this.messagingService.sendMessage(messageSend).then( response => {
        let message = new MessageGet(
          messageText, 
          this.authService.getUserId(),
          this.chat?.id!
        );
        this.chat?.messages.push(message);
      }
      )
    }
  }

  onReadMessage(message: MessageGet){
    this.messagingService.readMessage(message).then(_ => {
      this.leftUntilLoad --;
      if (this.leftUntilLoad === 0) {
        this.loadMessages();
      }
    } );
  }
  
  private loadMessages(){
    if (this.chat?.id != undefined){
      const take: number = 20;

      this.messagingService.getMessagesInChatRoom(this.chat.id, this.skip, take).subscribe(messages => {
        this.chat?.messages.push(...messages);
      });
      this.leftUntilLoad += take;
      this.skip += take;
    }
  }
}
