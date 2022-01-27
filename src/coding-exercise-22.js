function isPerfectNumberV1(n) {
  // your code here
  if (n < 1 || n > 999) return false;

  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}

function isPerfectNumberV2(n) {
  // your code here
  if (n < 1 || n > 999) return false;

  const arr = [];
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) arr.push(i);
  }

  const total = arr.reduce((pre, cur) => pre + cur, 0);
  return total === n;
}

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    return isPerfectNumberV1(numberList[i]) === true;
  }
}
// console.log(isAllPerfectNumbersV1([]));
// console.log(isAllPerfectNumbersV1([1, 6]));
// console.log(isAllPerfectNumbersV1([1, 2, 3]));
// console.log(isAllPerfectNumbersV1([6]));
// console.log(isAllPerfectNumbersV1([6, 28]));

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const result = numberList.reduce((count, number) => {
    if (isPerfectNumberV2(number)) return (count += 1);
  }, 0);

  return result === numberList.length;
}
// console.log(isAllPerfectNumbersV2([]));
// console.log(isAllPerfectNumbersV2([1, 6]));
// console.log(isAllPerfectNumbersV2([1, 2, 3]));
// console.log(isAllPerfectNumbersV2([6]));
// console.log(isAllPerfectNumbersV2([6, 28]));

// every
function isAllPerfectNumbersV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.every((number) => {
    return isPerfectNumberV1(number) === true;
  });
}
console.log(isAllPerfectNumbersV3([]));
console.log(isAllPerfectNumbersV3([1, 6]));
console.log(isAllPerfectNumbersV3([1, 2, 3]));
console.log(isAllPerfectNumbersV3([6]));
console.log(isAllPerfectNumbersV3([6, 28]));
