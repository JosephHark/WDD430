import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messagesChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    )
  }

  onAddMessage(message: Message) {
    //push message to array of messages
    this.messages.push(message);
  }

}