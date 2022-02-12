function createRandomColorFn(colorList) {
  // your code here
  if (!Array.isArray(colorList)) throw new Error('colorList should be an array');

  if (colorList.length === 0) throw new Error('colorList should not be empty');

  if (colorList.length === 1) throw new Error('colorList should have more than one item');

  const randomIndex = Math.trunc(Math.random() * colorList.length);

  return function () {
    let currentIndex = colorList[randomIndex];
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
      newIndex = Math.trunc(Math.random() * colorList.length);

      currentIndex = colorList[newIndex];
      return currentIndex;
    }
  };
}

const randomColor = createRandomColorFn(['red', 'blue', 'black']);
const currentColor = randomColor();
console.log(currentColor);

const nextColor = randomColor();
console.log(nextColor);
