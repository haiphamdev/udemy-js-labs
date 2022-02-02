// P1: extract all digits and compare from right to left
// P2: convert to string and compare
// export function isIncreasingNumber(n) {
//   if (n < 10) return false;

//   let remaining = n;
//   let prevDigit = 10;

//   while (remaining > 0) {
//     const lastDigit = remaining % 10;
//     if (lastDigit >= prevDigit) return false;

//     prevDigit = lastDigit;

//     remaining = Math.trunc(remaining / 10);
//   }

//   return true;
// }

export function isIncreasingNumber(n) {
  if (n < 10) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}
