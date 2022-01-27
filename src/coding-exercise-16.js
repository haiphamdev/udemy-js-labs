// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  if (a < -99 || a > b || b > 99) return [];
  const arr = [];
  for (let i = a; i <= b - a + a; i++) {
    arr.push(i);
  }

  return arr;
}
console.log(createArrayInRangeV1(1, 5));
console.log(createArrayInRangeV1(-2, 1));

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a < -99 || a > b || b > 99) return [];

  return Array.from(Array(b - a + 1), (v, i) => i + a);
}
console.log(createArrayInRangeV2(1, 5));
console.log(createArrayInRangeV2(-2, 1));
