import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingPageComponent } from './components/messaging-page/messaging-page.component';
import { MessageComponent } from './components/message/message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatPreviewComponent } from './components/chat-preview/chat-preview.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    MessagingPageComponent,
    ChatWindowComponent,
    MessageComponent,
    ChatPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class MessagingModule { }
