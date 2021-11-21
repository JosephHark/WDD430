import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SkillsComponent } from './skills/skills.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { TraitsComponent } from './traits/traits.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SkillsComponent,
    DungeonComponent,
    TraitsComponent
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
