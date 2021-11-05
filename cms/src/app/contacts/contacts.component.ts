import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  //object for the selected contact
  selectedContact: Contact;

  //inject contact service
  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contactService.contactChangedEvent.subscribe(contact => {
      this.selectedContact = contact;
    });
  }

 
}