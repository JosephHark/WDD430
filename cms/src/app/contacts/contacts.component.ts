import { Component, OnInit, Input } from '@angular/core';
import { Contact } from './contact.model';
import { ContactsService } from './contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() selectedContact: Contact;
  constructor(private ContactsService: ContactsService) { }

  ngOnInit(): void {
    this.ContactsService.contactChangedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );

}
}