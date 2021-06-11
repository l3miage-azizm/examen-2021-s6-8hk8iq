import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game, newGame } from './Game';

interface GamesServiceInterface {
  readonly gamesObs: Observable<Game[]>;
  newGame(): void;
  play(id: number, col: number): void;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService implements GamesServiceInterface {
  private gamesSubj = new BehaviorSubject<Game[]>([newGame()]);
  readonly gamesObs = this.gamesSubj.asObservable();

  constructor() { }

  newGame(): void {
    this.gamesSubj.next( [...this.gamesSubj.value, newGame()] );
  }

  play(id: number, col: number): void {
    const game = this.gamesSubj.value.find( g => g.id === id );
    if (game) {
      const S = game.board.length - 1;
      const pos = S - [...game.board].reverse().findIndex( line => line[col] === 'EMPTY');
      if (pos >= 0 && pos <= S) {
        game.board[pos][col] = game.turn;
        const newG: Game = {
          ...game,
          turn: game.turn === 'YELLOW' ? 'RED' : 'YELLOW'
        };
        this.gamesSubj.next( this.gamesSubj.value.map( g => g === game ? newG : g) );
      }
    }
  }

}
