// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds > 59) return '';

  if (seconds < 10) return `0${seconds}`;
  return seconds.toString();
}
console.log(formatSecondsV1(0));
console.log(formatSecondsV1(9));
console.log(formatSecondsV1(20));

// using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds > 59) return '';

  return `0${seconds}`.slice(-2);
}
console.log(formatSecondsV2(0));
console.log(formatSecondsV2(9));
console.log(formatSecondsV2(20));
