import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory/inventory.component';
import { SkillsComponent } from './skills/skills.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { TraitsComponent } from './traits/traits.component';

//constant for array of routes
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/documents',
        pathMatch: 'full'
    },
    {
        path: 'inventory',
        component: InventoryComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'dungeon',
        component: DungeonComponent
    },
    {
        path: 'traits',
        component: TraitsComponent
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