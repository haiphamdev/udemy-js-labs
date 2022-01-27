// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;
const SECONDS_PER_DAY = 86400;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > SECONDS_PER_DAY) return '';

  const second = `0${seconds % 60}`.slice(-2);
  const minute = `0${Math.trunc((seconds / SECONDS_PER_MIN) % 60)}`.slice(-2);
  const hour = `0${Math.trunc(seconds / SECONDS_PER_HOUR)}`.slice(-2);

  return `${hour}:${minute}:${second}`;
}
console.log(formatTime(0));
console.log(formatTime(9));
console.log(formatTime(4256));
