export function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  const sqrtNInt = Math.trunc(sqrtN);
  return sqrtNInt * sqrtNInt === n;
}
