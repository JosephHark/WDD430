import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { DungeonDetailComponent } from './dungeon/dungeon-detail/dungeon-detail.component';
import { DungeonListComponent } from './dungeon/dungeon-list/dungeon-list.component';
import { DungeonEditComponent } from './dungeon/dungeon-edit/dungeon-edit.component';
import { DungeonItemComponent } from './dungeon/dungeon-item/dungeon-item.component';
import { CharacterComponent } from './character/character.component';
import { CharacterEditComponent } from './character/character-edit/character-edit.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterItemComponent } from './character/character-item/character-item.component';
import { CharacterListComponent } from './character/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    DungeonDetailComponent,
    DungeonListComponent,
    DungeonEditComponent,
    DungeonItemComponent,
    CharacterComponent,
    CharacterEditComponent,
    CharacterDetailComponent,
    CharacterItemComponent,
    CharacterListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
