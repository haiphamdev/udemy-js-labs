// v1
function findSecret(code) {
  // your code here
  let result = '';

  for (let i = 0; i < code.length; i++) {
    if (code[i] >= 'a' && code[i] <= 'z') {
      result += code[i];
    }
  }
  return result;
}

// v2
function findSecret(code) {
  // your code here
  let result = code;

  for (let i = 0; i < code.length; i++) {
    if (code[i] >= 'A' && code[i] <= 'Z') {
      result = result.replace(code[i], '');
    }
  }
  return result;
}

// v3
function findSecret(code) {
  // your code here
  return code.replace(/[A-Z]/g, '').trim();
}
console.log(findSecret('SUPERCODE'));
console.log(findSecret('SUPERhelloCODE'));
