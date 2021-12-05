import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllModule } from './material-all.module';
import { AppComponent } from './app.component';
import { ColorBlockComponent } from './color-block/color-block.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    GameBoardComponent,
    InstructionsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAllModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
