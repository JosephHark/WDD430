import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
