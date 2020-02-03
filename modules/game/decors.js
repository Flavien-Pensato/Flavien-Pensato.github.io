export const map = [
  ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
  ['ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground',
    'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground', 'ground'],
  ['bush', null, null, null, 'hill', null, null, null, null, null, null, null, null, 'bush', null, 'bush', null, null, null, null, null, null, null, null, null, 'hill', null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'bush'],
  [],
  [],
  [null, null, null, 'question', null, null, null, null, null, 'brick', null, null, null, null, null, null, null, null, null, null, 'brick', 'brick'],
  [],
  [],
  [],
  [null, null, null, null, null, null, null, null, null, null, null, null, 'brick', 'brick', 'brick', null, null, null, null, 'brick', 'question', 'question', 'brick'],
  [],
  [],
  [null, null, null, null, null, null, 'littleCloud'],
].reverse();

export const mario = {
  X: 32,
  Y: 60,
  height: 54,
  width: 28,
  Sx: 10,
  Sy: 5,
  Swidth: 14,
  Sheight: 27,
  collisionLeft: 5,
  collisionRight: -10,
  onGround: true,
  gravity: {
    value: 0,
    speed: 0.02,
    max: 0.35,
  },
  motion: {
    value: 0,
    speed: 0.008,
    max: 0.3,
  },
  collisionCaseTypes: ['brick', 'ground', 'question', 'pipe'],
  direction: 'right',
};

const brick = {
  name: 'brick',
  sx: 1050,
  sy: 60,
  sHeight: 116,
  sWidth: 116,
  height: 30,
  width: 30,
};

const ground = {
  name: 'ground',
  sx: 872,
  sy: 60,
  sHeight: 119,
  sWidth: 115,
  height: 30,
  width: 30,
};

const question = {
  name: 'question',
  sx: 699,
  sy: 63,
  sHeight: 116,
  sWidth: 116,
  height: 30,
  width: 30,
};

const hill = {
  name: 'hill',
  sx: 0,
  sy: 44,
  sHeight: 135,
  sWidth: 346,
  height: 70,
  width: 150,
};

const bush = {
  name: 'bush',
  sx: 409,
  sy: 63,
  sHeight: 114,
  sWidth: 234,
  height: 50,
  width: 100,
};

const littleCloud = {
  name: 'littleCloud',
  sx: 1781,
  sy: 0,
  sHeight: 178,
  sWidth: 238,
  height: 80,
  width: 120,
};

export const drawDecor = (dx, dy, type, Context2DDecors, image) => {
  switch (type) {
    case 'brick':
      Context2DDecors.drawImage(image, brick.sx, brick.sy, brick.sWidth, brick.sHeight,
        dx, dy - brick.height, brick.width, brick.height);
      break;
    case 'ground':
      Context2DDecors.drawImage(image, ground.sx, ground.sy, ground.sWidth, ground.sHeight,
        dx, dy - ground.height, ground.width, ground.height);
      break;
    case 'question':
      Context2DDecors.drawImage(image, question.sx, question.sy, question.sWidth, question.sHeight,
        dx, dy - question.height, question.width, question.height);
      break;
    case 'hill':
      Context2DDecors.drawImage(image, hill.sx, hill.sy, hill.sWidth, hill.sHeight,
        dx, dy - hill.height, hill.width, hill.height);
      break;
    case 'bush':
      Context2DDecors.drawImage(image, bush.sx, bush.sy, bush.sWidth, bush.sHeight,
        dx, dy - bush.height, bush.width, bush.height);
      break;
    case 'littleCloud':
      Context2DDecors.drawImage(image, littleCloud.sx, littleCloud.sy, littleCloud.sWidth, littleCloud.sHeight,
        dx, dy - littleCloud.height, littleCloud.width, littleCloud.height);
      break;
    default:
  }
};

export const defaultDecors = (Decors) => {
  let x = 0;
  let y = Decors.Canvas.height;

  map.forEach((line) => {
    line.forEach((value) => {
      drawDecor(x, y, value, Decors.Context2D, Decors.sheet);
      x += 30;
    });

    y -= 30;
    x = 0;
  });
};
