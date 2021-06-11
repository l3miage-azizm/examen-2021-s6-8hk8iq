import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './Game';
import { GamesService } from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private gs: GamesService) {}

  get games(): Observable<Game[]> {
    return this.gs.gamesObs;
  }

  play(g: Game, col: number): void {
    this.gs.play(g.id, col);
  }

  newGame(): void {
    this.gs.newGame();
  }
}
