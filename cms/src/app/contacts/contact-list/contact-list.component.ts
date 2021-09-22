import { Component, OnInit} from '@angular/core';
import { Contact } from '../contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  //list of contacts
  contacts: Contact[] = []
 
  ngOnInit(): void {

  }
}