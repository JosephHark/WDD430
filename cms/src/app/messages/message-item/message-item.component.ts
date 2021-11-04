import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../messages.model';
import { Contact } from 'src/app/contacts/contact.model';
import { ContactsService } from 'src/app/contacts/contacts.service';
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  messageSender: string;
  @Input() message: Message;
  constructor(private ContactsService: ContactsService) { }

  ngOnInit(): void {
    const contact: Contact = this.ContactsService.getContact(this.message.sender);
    this.messageSender = contact.name;
  }

}
