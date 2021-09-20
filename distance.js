const x1 = 1;
const y1 = 4;
const x2 = 3;
const y2 = 0;

const minusX = x2 - x1;
const minusY = y2 - y1;

const sqXresult = minusX * minusX;
const sqYresult = minusY * minusY;

const sqXY = sqXresult + sqYresult;

const sqrtXY = sqXY ** 0.5;

console.log(sqrtXY);
