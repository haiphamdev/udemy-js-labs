function getTicketPrice(age) {
  // your code here
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age <= 12) return 20000;
  return 50000;
}
console.log(getTicketPrice(0));
console.log(getTicketPrice(5));
console.log(getTicketPrice(70));
console.log(getTicketPrice(10));
console.log(getTicketPrice(15));
