function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    return obj1[key] === obj2[key];
  }

  return true;
}
console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));
