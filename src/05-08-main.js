// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false
// flag
// v1
export function isPositiveEvenNumberV1(n) {
  let isValid;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2
export function isPositiveEvenNumberV2(n) {
  let isValid = false;

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// v3
export function isPositiveEvenNumberV3(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

// v4
export function isPositiveEvenNumberV4(n) {
  return n > 0 && n % 2 === 0;
}
// console.log(isPositiveEvenNumber(5));
