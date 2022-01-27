function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const arr = [];
  numberList.forEach((number) => (number % 2 === 0 ? arr.push(number) : 0));
  const result = arr.reduce((a, b) => a + b, 0);
  return Math.round(result / arr.length) || 0;
}
console.log(calcAvgOfAllEvenNumbers([1]));
console.log(calcAvgOfAllEvenNumbers([1, 2]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
