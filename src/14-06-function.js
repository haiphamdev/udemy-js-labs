function sum(...numberList) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  //   return sum;

  // return [...arguments].reduce((total, number) => total + number);

  return numberList.reduce((total, number) => total + number);
}
// console.log(sum(1)); // 1
// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3)); // 6

const numberList = [1, 2, 3];
console.log(sum(...numberList));

const sumArrow = (a, b) => a + b;
console.log(sumArrow(5, 10));

const student = () => ({ name: 'Easy' });
console.log(student());

function sum(x) {
  return function (y) {
    return x + y;
  };
}

console.log(sum(5)(10));

function createIdGenerator(startId = 1) {
  let id = startId;
  return function () {
    console.log(id);
    return id++;
  };
}
const getNextId = createIdGenerator(10);
getNextId(); // 10
getNextId(); // 11
getNextId(); // 12
