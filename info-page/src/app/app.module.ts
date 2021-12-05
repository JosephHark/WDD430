import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactItemComponent,
    ContactListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
