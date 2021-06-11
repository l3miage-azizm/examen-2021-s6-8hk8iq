import { Game } from "./app/Game";

const L: ((g: Game) => Promise<number>)[] = [];

function noter(g: Game, col: number) : Promise<[col : number, note : number]> {
  return new Promise<[col : number, note : number]>( resolve => setTimeout(
      () => resolve([col, Math.floor(Math.random()*g.board.length)]),
      Math.random() * 2000
    )
  );
}

async function computeIA(g: Game): Promise<number> {
  const LR = await Promise.all( L.map( f => f(g).then( c => noter(g, c) ) ) );
  return LR.reduce( (evMax, ev) => evMax[1] >= ev[1] ? evMax : ev )[0];
}
