const FRAME_COUNT = 24;
const WIDTH = 80;
const HEIGHT = 24;
const TRAIL = 10;
const GREENS = [46, 47, 48, 82, 83, 84, 34, 10, 2];
const WHITES = [230, 231, 195];

const green = character => `\u001B[40m\u001B[38;5;${GREENS[Math.floor(Math.random() * GREENS.length)]}m${character}`;
const white = character => `\u001B[40m\u001B[38;5;${WHITES[Math.floor(Math.random() * WHITES.length)]}m${character}`;

const matrix = new Array(HEIGHT).fill(null).map(() => new Array(WIDTH).fill(null).map(() => ({character: ' ', modified: green(' ')})));
const trailStart = new Array(WIDTH).fill(null).map(() => Math.floor(Math.random() * HEIGHT));
const frames = [];

const characterSet = new Array(94).fill(null).map((x, index) => {
  return String.fromCharCode(33 + index);
});

for (let i = 0; i < FRAME_COUNT; i++) {
  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 5; x <= WIDTH - 5; x += 5) {
      const character = characterSet[Math.floor(Math.random() * characterSet.length)];
      matrix[y][x].character = character;
      matrix[y][x].modified = green(character);
    }
  }

  for (let x = 0; x < WIDTH; x += 3) {
    for (let index = 0; index < TRAIL; index++) {
      const y = (trailStart[x] + index) % HEIGHT;
      const character = matrix[y][x].character;
      matrix[y][x].modified = white(character);
    }
    trailStart[x] = (trailStart[x] + 1) % HEIGHT;
  }

  const frame = matrix.reduce((result, row) => result + row.map(x => x.modified).join('') + '\n', '');

  frames.push(frame);
}

module.exports = frames;
