export function* idMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const getId = idMaker();

export const generateRandomNumber = (min = 0, max = 1) => {
  return min + Math.round(Math.random() * max);
};

export const generateRandomRGBColor = () => {
  const maxValue = 200;

  const r = generateRandomNumber(0, maxValue);
  const g = generateRandomNumber(0, maxValue);
  const b = generateRandomNumber(0, maxValue);

  return `rgb(${r}, ${g}, ${b})`;
};

export const getShapesProportion = (shapes = [], leftSide = false) => {
  return shapes.reduce((total, current) => {
    const left = leftSide ? 50 - current.left : current.left;
    total += current.weight * left;
    return total;
  }, 0);
};

export { getId };
