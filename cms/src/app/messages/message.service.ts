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

  //inject http client
  constructor(private http: HttpClient) {
    this.getMessages();

    getMessages() {
    this.http.get('https://cms-app-d5fce.firebaseio.com/messages.json')
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();
          this.messages.sort((a, b) => (a.id < b.id) ? 1 : (a.id > b.id) ? -1 : 0)
          this.messageListChangedEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      )
  }

  getMessage(id: string): Message {
    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (const message of this.messages) {
      const currentId = +message.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
    this.storeMessages();
  }

  storeMessages() {
    let messages = JSON.stringify(this.messages);

    const headers = new HttpHeaders({
    });

    this.http.put('https://cms-app-d5fce.firebaseio.com/messages.json', messages, { headers: headers })
      .subscribe(
        () => {
          this.messageListChangedEvent.next(this.messages.slice());
        }
      )
  }
}