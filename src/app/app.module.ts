import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GameComponent } from './game/game.component';
import { GamesService } from './games.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GameComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GamesService]
})
export class AppModule { }
