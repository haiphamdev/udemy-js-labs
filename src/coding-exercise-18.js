// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
  if (n < 1 || n > 1000 || !Number.isInteger(n)) return [];

  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  return arr;
}
console.log(getDivisorListV1(1));
console.log(getDivisorListV1(10));
console.log(getDivisorListV1(12));

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here
  if (n < 1 || n > 1000 || !Number.isInteger(n)) return [];

  return Array.from(Array(n), (v, i) => i + 1).filter((x) => (n % x === 0 ? x : ''));
}
console.log(getDivisorListV2(1));
console.log(getDivisorListV2(10));
console.log(getDivisorListV2(12));

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  // your code here
  if (n < 1 || n > 1000 || !Number.isInteger(n)) return [];

  const arr = [];
  Array.from(Array(n), (v, i) => i + 1).forEach((x) => (n % x === 0 ? arr.push(x) : ''));
  return arr.sort((a, b) => a - b);
}
console.log(getDivisorListV3(1));
console.log(getDivisorListV3(10));
console.log(getDivisorListV3(12));
