// using split
function extractDomainV1(email) {
  // your code here
  if (email === '') return '';

  return email.split('@')[1];
}
console.log(extractDomainV1(''));
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email === '') return '';

  return email.slice(email.indexOf('@') + 1);
}
console.log(extractDomainV2(''));
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));
