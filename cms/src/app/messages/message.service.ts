import { Injectable } from '@angular/core';
import { Message } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageChangeEvent = new Subject<Message[]>();
  messages: Message[] = [];

  maxMessageId: number;

  //inject http client
  constructor(private http: HttpClient) {
    this.getMessages();
  }
    getMessages() {
    this.http.get('https://cms-app-d5fce.firebaseio.com/messages.json')
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();
          this.messages.sort((a, b) => (a.Id < b.Id) ? 1 : (a.Id > b.Id) ? -1 : 0)
          this.messageChangeEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.log(error);
        }
      )
  }

  getMessage(Id: string): Message {
    for (const message of this.messages) {
      if (message.Id === Id) {
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

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.next(this.messages.slice());
    this.storeMessages();
  }

  storeMessages() {
    let messages = JSON.stringify(this.messages);

    const headers = new HttpHeaders({
    });

    this.http.put('https://cmswithfirebase-1-default-rtdb.firebaseio.com/messages.json', messages, { headers: headers })
      .subscribe(
        () => {
          this.messageChangeEvent.next(this.messages.slice());
        }
      )
  }
}