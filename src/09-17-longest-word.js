// Write a function to find the longest word
// for...i
function findLongestWordI(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length > longestWord.length) {
      longestWord = wordList[i];
    }
  }

  return longestWord;
}

// forEach
function findLongestWordEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  });

  return longestWord;
}

// reduce
function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  return wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord
  );
}

const wordList = ['easy', 'frontend'];
console.log(findLongestWordI(wordList));
console.log(findLongestWordEach(wordList));
console.log(findLongestWordReduce(wordList));
