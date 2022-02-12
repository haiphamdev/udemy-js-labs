function divisibleBy(n) {
  // your code here
  return function (x) {
    return x % n === 0;
  };
}

const isDivisibleByFive = divisibleBy(5);
console.log(isDivisibleByFive(4));
console.log(isDivisibleByFive(5));
