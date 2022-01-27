// v1
function getMaxDigit(n) {
  // your code here
  if (n < 0 || n > 999 || !Number.isInteger(n)) return -1;

  let max = n % 10;

  if (Math.trunc((n % 100) / 10) > max) max = Math.trunc((n % 100) / 10);
  if (Math.trunc(n / 100) > max) max = Math.trunc(n / 100);

  return max;
}

// v2
function getMaxDigit(n) {
  // your code here
  if (n < 0 || n > 999 || !Number.isInteger(n)) return -1;

  let max = 0;
  const length = n.toString();
  for (let i = 0; i < length.length; i++) {
    if (length[i] > max) max = length[i];
  }

  return max;
}
console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(923));
