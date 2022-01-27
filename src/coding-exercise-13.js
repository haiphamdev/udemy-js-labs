// v1
function getFullName(firstName, lastName) {
  // your code here
  const fn = firstName
    ? `${firstName.trim()[0].toUpperCase()}${firstName.trim().slice(1).toLowerCase()}`
    : '';
  const ln = lastName
    ? `${lastName.trim()[0].toUpperCase()}${lastName.trim().slice(1).toLowerCase()}`
    : '';

  return `${fn} ${ln}`.trim();
}

// v2
function capitalize(str) {
  if (str === '') return '';

  const trimmedStr = str.trim().toUpperCase();
  return `${trimmedStr[0]}${trimmedStr.slice(1).toLowerCase()}`;
}
function getFullName(firstName, lastName) {
  // your code here
  const fn = capitalize(firstName || '');
  const ln = capitalize(lastName || '');

  return `${fn} ${ln}`.trim();
}

console.log(getFullName('Alice'));
console.log(getFullName('Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('john', 'pHAm'));
