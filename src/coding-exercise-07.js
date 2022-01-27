// v1
function removeVowel(str) {
  // your code here
  if (str === '') return '';

  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}

// v2
function removeVowel(str) {
  // your code here
  if (str === '') return '';

  const vowel = 'ueoai';
  for (let i = 0; i < vowel.length; i++) {
    if (str.includes(vowel[i])) str = str.replace(vowel[i], '');
  }

  return str.trim();
}

// v3
function removeVowel(str) {
  // your code here
  if (str === '') return '';

  return str.replaceAll(/[ueoai]/g, '').trim();
}
console.log(removeVowel(''));
console.log(removeVowel('say hello'));
