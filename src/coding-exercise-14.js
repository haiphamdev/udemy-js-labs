function cloneObject(obj) {
  // your code here
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
}
console.log(cloneObject({ name: 'Bob', math: 9 }));
