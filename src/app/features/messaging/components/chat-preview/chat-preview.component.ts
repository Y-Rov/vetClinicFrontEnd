import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/core/models/Chat';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent implements OnInit {
  
  @Input() chat?: Chat;

  constructor(
    private messagingService: MessagingService
  ) 
  {}

  ngOnInit(): void {
    if (this.chat != undefined)
      this.chat.numberOfUnreadMessages = this.messagingService.unreadMessageRegistry.get(this.chat.id!)?.length ?? 0;
  }
}
