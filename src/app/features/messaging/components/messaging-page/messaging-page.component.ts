import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.sass']
})
export class MessagingPageComponent implements OnInit {

  chats: Chat[] = [];
  selectedChat?: Chat;

  constructor(
    private messagingService: MessagingService
  ) { }

  ngOnInit(): void {
    // load chats
    this.messagingService.getChats().subscribe(
      data => this.chats = data
    );

    // load unread messages into registry
    this.messagingService.getUnreadMessages(); 

    // on receive message
    // TODO: 
    this.messagingService.getMessage$.subscribe(
      message => 
        this.chats.find(c => c.id === message.chatRoomId)
          ?.messages?.push(message)
    )
  }

  onChatSelect(chat: Chat): void {
    this.selectedChat = chat;
  }

}
