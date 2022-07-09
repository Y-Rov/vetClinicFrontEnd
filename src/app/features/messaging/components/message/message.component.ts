import { Component, Input, OnInit } from '@angular/core';
import { MessageGet } from 'src/app/core/models/Messages/MessageGet';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() message?: MessageGet;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
