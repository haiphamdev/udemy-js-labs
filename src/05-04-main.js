// Logical Operators
// Nếu là số dương thì ...
export function checkNumber1(n) {
  return n > 0;
}

// Nếu là số dương chẳn thì ...
export function checkNumber2(n) {
  return n > 0 && n % 2 === 0;
}

// Nếu là số dương chẵn và lớn hơn 10 thì ...
export function checkNumber3(n) {
  return n > 0 && n % 2 === 0 && n > 10;
}

// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
export function checkNumber4(n) {
  return n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0;
}

// Nếu là số dương chẳn hoặc số âm lẻ thì ...
export function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  return isEvenPositive || isOddNegative;
}
