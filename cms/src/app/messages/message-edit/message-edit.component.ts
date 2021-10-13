import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Message } from '../messages.model';
import { MessagesService } from '../message.service';
@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  //references to the DOM
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  //output event emitter
  @Input() message: Message;
  currentSender = '1';
  id = '1';

  //inject message service
  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  onSendMessage() {
    const msgSubject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;

    const newMessage = new Message(this.id, msgSubject, msgText, this.currentSender );
    this.messageService.addMessage(newMessage); 
   }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
}