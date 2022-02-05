export function isPerfectNumber(n) {
  if (n < 2) return false;

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}