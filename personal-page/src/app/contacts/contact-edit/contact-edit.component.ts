import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
   contact: Contact = null;
   originalContact: Contact;
   groupContacts: Contact[] = [];
   editMode: boolean = false;
   hasGroup: boolean = false;
   invalidGroupContact: boolean;
constructor(private ContactsService: ContactsService,private router: Router,private route: ActivatedRoute) { }
ngOnInit(): void {
  this.route.params.subscribe(
    (params: Params) => {
      const id = params['id'];

      if (!id) {
        this.editMode = false;
        return;
      }

      this.originalContact = this.ContactsService.getContact(id);

      if (!this.originalContact) {
        return;
      }

      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));

      if (this.contact.group !== null && this.contact.group !== undefined) {
        this.hasGroup = true;
        this.contact = JSON.parse(JSON.stringify(this.originalContact.group));
        this.groupContacts = this.contact.group.slice();
      }
    }
  )
}

onCancel() {
  this.router.navigate(['/contacts'], { relativeTo: this.route });
}

onSubmit(form: NgForm) {
  const values = form.value;

  const newContact = new Contact(null, values.name, values.email, values.phone, values.imageUrl, this.groupContacts);

  if (this.editMode === true) {
    this.ContactsService.updateContact(this.originalContact, newContact);
  } else {
    this.ContactsService.addContact(newContact);
  }

  this.router.navigate(['/contacts'], { relativeTo: this.route });
}

isInvalidContact(newContact: Contact) {
  if (!newContact) {
    return true;
  }

  if (newContact.id === this.contact.id) {
    return true;
  }

  for (let i = 0; i < this.groupContacts.length; i++) {
    if (newContact.id === this.groupContacts[i].id) {
      return true;
    }
  }

  return false;
}

addToGroup($event: any) {
  const selectedContact: Contact = $event.dragData;
  this.invalidGroupContact = this.isInvalidContact(selectedContact);
  if (this.invalidGroupContact) {
    return;
  }
  this.groupContacts.push(selectedContact);
  this.invalidGroupContact = false;
}

onRemoveItem(idx: number) {
  if (idx < 0 || idx >= this.groupContacts.length) {
    return;
  }

  this.groupContacts.splice(idx, 1);
  this.invalidGroupContact = false;
}

}