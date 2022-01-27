// every
// v1
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

// v2
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }

  return true;
}
console.log(checkIfAllEven([1, 2, 3]));
console.log(checkIfAllEven([2, 4, 6]));

// some
function checkIfSomeEven(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }

  return false;
}
console.log(checkIfSomeEven([1, 3, 5]));
console.log(checkIfSomeEven([2, 4, 6]));

// indexOf
function hasExits(element, args) {
  return element === args;
}

function checkExitsFirst(arr, args) {
  if (!Array.isArray(arr)) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (hasExits(arr[i], args)) return i;
  }

  return -1;
}
console.log(checkExitsFirst(['easy', 'frontend', 'easy'], 'easy'));

// lastIndexOf
function hasExits(element, args) {
  return element === args;
}

function checkExitsLast(arr, args) {
  if (!Array.isArray(arr)) return -1;

  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (hasExits(arr[i], args)) result = i;
  }

  return result;
}
console.log(checkExitsLast(['easy', 'frontend', 'easy', 'easy'], 'easy'));

// includes
function hasExits(element, args) {
  return element === args;
}

function checkExits(arr, args) {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (hasExits(arr[i], args)) return true;
  }

  return false;
}
console.log(checkExits(['easy', 'frontend', 'easy'], 'easy'));
console.log(checkExits(['frontend'], 'easy'));
