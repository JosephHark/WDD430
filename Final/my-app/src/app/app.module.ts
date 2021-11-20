import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
