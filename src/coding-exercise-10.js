// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  if (url === '') return '';

  return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0;
}
console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('https://ezfrontend.com'));
console.log(isSecureUrlV1('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV1('ws://chat.abc.com'));

// using startsWith()
function isSecureUrlV2(url) {
  // your code here
  if (url === '') return '';

  return url.startsWith('https') || url.startsWith('wss');
}
console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));
