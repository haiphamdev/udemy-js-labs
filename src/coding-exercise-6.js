function isSymmetricNumber(n) {
  // your code here
  if (n < 0 || n > 999) return false;

  if (n < 10) return true;
  if (n < 100) return Math.trunc(n / 10) === n % 10;
  return Math.trunc(n / 100) === n % 10;
}
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(121));
console.log(isSymmetricNumber(122));
