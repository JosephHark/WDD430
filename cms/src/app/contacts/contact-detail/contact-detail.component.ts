import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact.model'
import { ContactService } from '../contacts.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    //subscribe to current active route and get the id from param
    this.route.params.subscribe(
      (params: Params) => {
        //retrieve contact that has id from params and store it in contact property
        this.contact = this.contactService.getContact(params['id']);
      }
    )
  }

  onDelete() {
    //delete using service
    this.contactService.deleteContact(this.contact);
    //navigate to contact list relative to this route
    // this.router.navigate(['/contacts'], { relativeTo: this.route });
    this.router.navigateByUrl('/contacts');
  }

}