import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageListChangedEvent = new Subject<Message[]>();
  messages: Message[] = [];
  maxMessageId: number;

  constructor(private http: HttpClient) {  }

  getMessages() {
    this.http.get<{ message: string, messages: Message[] }>('http://localhost:3000/messages')
      .subscribe(
        (messagesData) => {
          this.messages = messagesData.messages;
          this.messages.sort((a, b) => (a.Id < b.Id) ? 1 : (a.Id > b.Id) ? -1 : 0)
          this.messageListChangedEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      )
  }

  getMessage(id: string): Message {
    for (const message of this.messages) {
      if (message.Id === id) {
        return message;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (const message of this.messages) {
      const currentId = +message.Id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addMessage(newMessage: Message) {
    if (!newMessage) {
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    newMessage.Id = '';
    const strMessage = JSON.stringify(newMessage);

    this.http.post('http://localhost:3000/messages', strMessage, { headers: headers })
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.messageListChangedEvent.next(this.messages.slice());
        });
  }
}