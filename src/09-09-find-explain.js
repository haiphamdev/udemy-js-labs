// find(callbackFn)
// find(x => x>0)
// v1
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  let result;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
      result = number;
      break;
    }
  }

  return result;
}

// v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return numberList[i];
  }

  return undefined;
}

// v3
function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    if (callbackFn(numberList[i], i)) return numberList[i];
  }

  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 2, 5, 7], isEven));
console.log(findFirstEven([1, 2, 5, 7], (number) => number % 2 === 0));
console.log(findFirstEven([1, 2, 5, 7], (number) => number > 3));
