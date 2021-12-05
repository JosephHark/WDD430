import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBlockComponent } from './color-block/color-block.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    GameBoardComponent,
    InstructionsComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
