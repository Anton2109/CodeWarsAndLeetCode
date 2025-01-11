function isFibo(f) {
  let a = 0;
  let b = 1;
  let count = 0;

  while (a < f) {
    [a, b] = [b, a + b];
    count++;
  }

  return a === f ? count : -1;
}

const startTime = performance.now();
const result = isFibo(21);
const endTime = performance.now();

const milSec = endTime - startTime;

console.log(`Результат: ${result}`);
console.log(`Время выполнения: ${milSec} мс`);
