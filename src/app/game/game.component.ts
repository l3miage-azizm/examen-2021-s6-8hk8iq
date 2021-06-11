import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-game[game]',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {
  @Input () game!: Game;
  @Output() play = new EventEmitter<number>();
  hoverColumn = -1;

  constructor() {}

  ngOnInit(): void {
  }

  trackByIndex(i: number, e: any): number {
    return i;
  }

  canPlay(col: number): boolean {
    return this.game.board[0][col] === 'EMPTY';
  }

}
