import { NgModule } from '@angular/core';
import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
      path: '',
      redirectTo: '/documents',
      pathMatch: 'full'
  },
  {
      path: 'documents',
      component: DocumentsComponent,
      children: [
          {
              path: 'new',
              component: DocumentEditComponent
          },
          {
              path: ':id',
              component: DocumentDetailComponent
          },
          {
              path: ':id/edit',
              component: DocumentEditComponent
          }
      ]
  },
  {
      path: 'messages',
      component: MessageListComponent
  },
  {
      path: 'contacts',
      component: ContactsComponent,
      children: [
          {
              path: 'new',
              component: ContactEditComponent
          },
          {
              path: ':id',
              component: ContactDetailComponent
          },
          {
              path: ':id/edit',
              component: ContactEditComponent
          }
      ]
  }
]

//ng module to import and export modules
@NgModule({
  //import router moule for app Routes
  imports: [RouterModule.forRoot(appRoutes)],
  //export this router module to be used in app module
  exports: [RouterModule]
})

//expor the routing class
export class AppRoutingModule {

}