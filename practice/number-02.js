// extract all digits and compare from right to left
// convert to string and compare
export function isDecreasingNumber(n) {
  if (n < 10) return false;

  let remaining = n;
  let prevDigit = 0;

  while (remaining > 0) {
    const lastDigit = remaining % 10;
    if (lastDigit <= prevDigit) return false;

    prevDigit = lastDigit;

    remaining = Math.trunc(remaining / 10);
  }

  return true;
}
