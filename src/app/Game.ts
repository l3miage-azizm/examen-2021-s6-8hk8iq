export type PLAYER = 'RED' | 'YELLOW';
export type PLACE = PLAYER | 'EMPTY';

export type BOARD = PLACE[][]; // 6 lignes de 7 colonnes

export interface Game {
  readonly id: number;
  readonly turn: PLAYER;
  readonly board: BOARD;
}

let id = 0;
export function newGame(): Game {
  const g: Game = {
    id: ++id,
    turn: 'RED',
    board: new Array(6).fill(0).map( () => new Array<PLACE>(7).fill('EMPTY') )
  };
  return g;
}
