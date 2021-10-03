import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Homework', 'I would like some feedback on my homework, thanks', 'Bryan'),
    new Message('2', 'Exam', 'I need details for Exam, thanks', 'Yuri'),
    new Message('3', 'Project', 'When is the project due date?', 'Gilly')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    //push message to array of messages
    this.messages.push(message);
  }

}