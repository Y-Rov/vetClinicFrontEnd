import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.sass']
})
export class MessagingPageComponent implements OnInit {

  constructor(
    public messagingService: MessagingService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    // load chats
    this.messagingService.getChats().subscribe();
  }

  onChatSelect(chat: Chat): void {
    this.messagingService.selectedChat = chat;
  }

}
