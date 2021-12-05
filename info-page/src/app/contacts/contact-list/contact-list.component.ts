import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy{
  term: string;                              
  contacts: Contact[] = [];
  private subscription: Subscription;
  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contactListChangedEvent
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });

    this.contactService.getContacts();
  }

  search(value: string) {

    this.term = value;
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}