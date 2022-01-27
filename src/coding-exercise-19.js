function isPerfectNumber(n) {
  // your code here
  if (n < 1 || n > 999) return false;

  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(10));
