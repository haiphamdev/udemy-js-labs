function createCounter() {
  // your code here
  const obj = {};

  function count(label = 'default') {
    obj[label] = (obj[label] || 0) + 1;

    return `${label}: ${obj[label]}`;
  }

  function resetCount(label = 'default') {
    obj[label] = 0;
  }

  return {
    count,
    resetCount,
  };
}

const counter = createCounter();
console.log(counter.count('easy'));
console.log(counter.count('easy'));
console.log(counter.count('easy'));
