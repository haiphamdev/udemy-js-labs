export function hasTwoDigitsWithSum(n, sum) {
  if (n < 10) return false;

  const str = n.toString();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }

  return result === sum;
}
