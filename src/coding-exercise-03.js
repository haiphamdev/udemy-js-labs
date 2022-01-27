// v1
function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount <= 0) return -1;

  let car7 = Math.trunc(passengersCount / 7);
  let car4 = 1;

  if (passengersCount <= 4) return `${car4} xe 4 cho`;

  if (passengersCount % 7 === 0) return `${car7} xe 7 cho`;
  if (passengersCount % 7 <= 4) return `${car4} xe 4 cho va ${car7} xe 7 cho`;
  if (passengersCount % 7 > 4) return `${car7 + 1} xe 7 cho`;
}
console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));

// v2
function getTaxiCount(passengersCount) {
  // your code here
  if (passengersCount <= 0) return -1;

  return Math.ceil(passengersCount / 7);
}
