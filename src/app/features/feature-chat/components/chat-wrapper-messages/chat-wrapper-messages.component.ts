import { Component, Input, OnInit } from '@angular/core';

import { MessageResponse, User } from 'src/app/core/models';

@Component({
  selector: 'chat-wrapper-messages',
  templateUrl: './chat-wrapper-messages.component.html',
  styleUrls:["./chat-wrapper-messages.component.scss"]
})
export class ChatWrapperMessagesComponent implements OnInit {

  @Input() messages: MessageResponse[] = [];
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
