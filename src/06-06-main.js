// 1. Random a number in range of [0, n]
function randomNumber(n) {
  if (n <= 0) return -1;

  return Math.round(Math.random() * n);
}
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));
// console.log(randomNumber(3));

// 2. Random a number in range of [a, b] với a < b
// min: a
// range: b - a
function randomNumberInRange(a, b) {
  if (a >= b) return -1;

  const random = Math.random() * (b - a);
  return Math.round(random) + a;
}
// console.log(randomNumberInRange(10, 99));
// console.log(randomNumberInRange(100, 999));
// console.log(randomNumberInRange(1000, 9999));
