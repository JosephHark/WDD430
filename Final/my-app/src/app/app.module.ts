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
import { DungeonDetailComponent } from './dungeon/dungeon-detail/dungeon-detail.component';
import { DungeonListComponent } from './dungeon/dungeon-list/dungeon-list.component';
import { DungeonEditComponent } from './dungeon/dungeon-edit/dungeon-edit.component';
import { DungeonItemComponent } from './dungeon/dungeon-item/dungeon-item.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';
import { InventoryDetailComponent } from './inventory/inventory-detail/inventory-detail.component';
import { SkillsDetailComponent } from './skills/skills-detail/skills-detail.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { TraitsDetailComponent } from './traits/traits-detail/traits-detail.component';
import { TraitsEditComponent } from './traits/traits-edit/traits-edit.component';
import { TraitsItemComponent } from './traits/traits-item/traits-item.component';
import { TraitsListComponent } from './traits/traits-list/traits-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SkillsComponent,
    DungeonComponent,
    TraitsComponent,
    DungeonDetailComponent,
    DungeonListComponent,
    DungeonEditComponent,
    DungeonItemComponent,
    InventoryItemComponent,
    InventoryListComponent,
    InventoryEditComponent,
    InventoryDetailComponent,
    SkillsDetailComponent,
    SkillsEditComponent,
    SkillsItemComponent,
    SkillsListComponent,
    TraitsDetailComponent,
    TraitsEditComponent,
    TraitsItemComponent,
    TraitsListComponent
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
