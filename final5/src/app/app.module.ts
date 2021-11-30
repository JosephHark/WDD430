import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { GuessFormComponent } from './guess-form/guess-form.component';
import { GuessListComponent } from './guess-list/guess-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessTheNumberComponent,
    GuessFormComponent,
    GuessListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
