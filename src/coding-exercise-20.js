// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const arr = [];
  for (let i = 0; i < numberList.length; i++) {
    const prevNumber = numberList[i - 1] || 0;
    const nextNumber = numberList[i + 1] || 0;
    arr.push(prevNumber + nextNumber);
  }

  return arr;
}
console.log(transformNumbersV1([]));
console.log(transformNumbersV1([1]));
console.log(transformNumbersV1([5, 10]));
console.log(transformNumbersV1([2, 4, 6, 8]));

// using forEach()
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  const arr = [];
  numberList.forEach((x, idx) => {
    const prevNumber = numberList[idx - 1] || 0;
    const nextNumber = numberList[idx + 1] || 0;
    arr.push(prevNumber + nextNumber);
  });

  return arr;
}
console.log(transformNumbersV2([]));
console.log(transformNumbersV2([1]));
console.log(transformNumbersV2([5, 10]));
console.log(transformNumbersV2([2, 4, 6, 8]));

// using map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return [...numberList];
  return numberList.map((x, idx) => {
    const prevNumber = numberList[idx - 1] || 0;
    const nextNumber = numberList[idx + 1] || 0;
    return prevNumber + nextNumber;
  });
}
console.log(transformNumbersV3([]));
console.log(transformNumbersV3([1]));
console.log(transformNumbersV3([5, 10]));
console.log(transformNumbersV3([2, 4, 6, 8]));
