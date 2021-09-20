const a = 1;
const b = 4;
const c = 3;

const x1 = +2;
const x2 = -2;

const negB = -1 * b;
const sqB = b * b;

const neg4xAC = -4 * a * c;
const twoXa = 2 * a;

const sqrt = (sqB + neg4xAC) ** 0.5;

const plusQuadformula = (negB + sqrt) / twoXa;
const minusQuadformula = (negB - sqrt) / twoXa;

console.log(plusQuadformula);
console.log(minusQuadformula);
