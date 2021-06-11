import { BOARD, PLACE } from "./app/Game";

type COORD = [line: number, column: number];

function Accu(b: BOARD, pt: COORD, v: COORD): COORD[][] {
  const segments: COORD[][] = [];
  let l = pt[0];
  let c = pt[1];
  let t: PLACE | undefined = undefined;

  while (l >= 0 && c >= 0 && l < b.length && c < b[0].length) {
    if (t !== b[l][c]) {
      segments.push( [ [l, c] ] );
      t = b[l][c];
    } else {
      const lastSeg = segments[ segments.length - 1 ];
      lastSeg.push( [l, c] );
    }
    l += v[0];
    c += v[1];
  }

  return segments;
}

function AccuToken(b: BOARD, pt: COORD, v: COORD): COORD[][] {
  return Accu(b, pt, v).filter( ([[l, c]]) => b[l][c] !== 'EMPTY' );
}

const testBoard: BOARD = [
  ['EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' ],
  ['EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' ],
  ['EMPTY' , 'EMPTY' , 'YELLOW', 'EMPTY' , 'EMPTY' , 'EMPTY' , 'EMPTY' ],
  ['EMPTY' , 'EMPTY' , 'RED'   , 'YELLOW', 'RED'   , 'EMPTY' , 'EMPTY' ],
  ['EMPTY' , 'YELLOW', 'RED'   , 'RED'   , 'YELLOW', 'EMPTY' , 'EMPTY' ],
  ['RED'   , 'YELLOW', 'YELLOW', 'YELLOW', 'RED'   , 'RED'   , 'EMPTY' ],
];

console.log( Accu(testBoard, [5, 0], [0 , 1]) );
console.log( Accu(testBoard, [4, 0], [-1, 1]) );

console.log( AccuToken(testBoard, [5, 0], [0 , 1]) );
console.log( AccuToken(testBoard, [4, 0], [-1, 1]) );
