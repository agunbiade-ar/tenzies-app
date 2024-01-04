export function randomNumberGenerator() {
  return Math.floor(Math.random() * 8) + 1;
}

export function generateRandomArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = { id: i, held: false, number: randomNumberGenerator() };
  }
  return array;
}
