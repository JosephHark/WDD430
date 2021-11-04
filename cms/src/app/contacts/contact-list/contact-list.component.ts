
  import { Component, EventEmitter, OnInit,Output, OnDestroy } from '@angular/core';
  import {Contact} from '../contact.model';
  import { ContactsService } from '../contacts.service';
  import { Subscription } from 'rxjs';
  @Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
  })
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = []
  private subscription: Subscription;
  //inject contact service
  constructor(private ContactsService: ContactsService) {
  }
  ngOnInit(): void {
    this.contacts = this.ContactsService.getContacts();
    this. subscription = this.ContactsService.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        console.log(contacts)
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}