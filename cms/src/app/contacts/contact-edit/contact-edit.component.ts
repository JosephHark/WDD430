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
  id: number;
  editMode = false;
  contact: Contact
  originalContact: Contact;
constructor(private ContactsService: ContactsService,private router: Router,private route: ActivatedRoute) { }
ngOnInit(): void {
  this.route.params.subscribe((params: Params)=> {
    this.id =+params['id'];
    if (this.id == null){
      this.editMode = false;
      return
    }
    const index = JSON.stringify(this.id)
    this.originalContact = this.ContactsService.getContact(index)
    if (this.originalContact == null){
      return
    }
    this.editMode = true;
    this.contact = JSON.parse(JSON.stringify(this.originalContact));

    })
}

onSubmit(form: NgForm){
  const value = form.value;
  const id = JSON.stringify(this.id)
  let group = null;
  console.log(value.name)
  const newDocument = new Contact(value.name, value.email, value.imageUrl, id, value.phone, group);
  console.log(this.editMode)
  if(this.editMode == true){
    this.ContactsService.updateContact(this.originalContact, newDocument)
  } else{
    this.ContactsService.addContact(newDocument);
  }
  this.onCancel()
}

onCancel(){
  this.router.navigate(['../'], {relativeTo: this.route})
}

}