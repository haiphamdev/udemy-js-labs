function isPrime(n) {
  // your code here
  if (n < 2 || n > 999) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
//  for...i
function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (isPrime(numberList[i])) return true;
  }

  return false;
}
console.log(hasPrimeV1([2, 3, 5]));
console.log(hasPrimeV1([6, 10]));

//  forEach
function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = false;
  numberList.forEach((number) => {
    if (isPrime(number)) result = true;
  });

  return result;
}
console.log(hasPrimeV2([2, 3, 5]));
console.log(hasPrimeV2([6, 10]));

//  find
function hasPrimeV3(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = false;
  numberList.find((number) => {
    if (isPrime(number)) result = true;
  });

  return result;
}
console.log(hasPrimeV3([2, 3, 5]));
console.log(hasPrimeV3([6, 10]));

//  findIndex
function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = false;
  numberList.findIndex((x) => {
    if (isPrime(x)) result = true;
  });

  return result;
}
console.log(hasPrimeV4([2, 3, 5]));
console.log(hasPrimeV4([6, 10]));

//  some
function hasPrimeV5(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = false;
  numberList.some((number) => {
    if (isPrime(number)) result = true;
  });

  return result;
}
console.log(hasPrimeV5([2, 3, 5]));
console.log(hasPrimeV5([6, 10]));
