// Using loop from 2 to n - 1
function isPrimeV1(n) {
  // your code here
  if (n < 2 || n > 999) return false;

  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
console.log(isPrimeV1(2));
console.log(isPrimeV1(3));
console.log(isPrimeV1(4));
console.log(isPrimeV1(10));

// Using loop from 2 to square root of n
function isPrimeV2(n) {
  // your code here
  if (n < 2 || n > 999) return false;

  for (let i = 2; i <= Math.trunc(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
console.log(isPrimeV2(2));
console.log(isPrimeV2(3));
console.log(isPrimeV2(4));
console.log(isPrimeV2(10));
