import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model'
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit, OnDestroy{
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