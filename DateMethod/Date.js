// *** new Date() -> ngay thang nam thu gio hien tai theo gio UTC
let d1 = new Date(); // 2023-07-07T17:28:44.727Z
console.log(d1);
// *** new Date(value) // -> Giá tri so nguyen dai dien cho so mili giay ke tu 01/01/1970-00:00:00 UTC.
let d2 = new Date(278686417);
console.log(d2); // 1970-01-04T05:24:46.417Z
// *** new Date(dateString)
let d3 = new Date("2023-07-07T17:28:44.727Z"); // 2023-07-06T20:24:00.000Z
console.log(d3);
// *** new Date(year, month(0-11), date, hour, minute, second, mili second)
let d4 = new Date(2023, 6, 7, 0, 37, 50, 6);
console.log(d4);
// getDate(), getFullYear(), getDay() [0-6], getHour(), ...., getUTCDate(),....
// setDate(),... -> dat gia tri Date, ... cho Date, ... cu the theo gio dia phuong
function run(year, month, day) {
  var d = new Date();

  d.setFullYear(year);
  d.setMonth(month);
  d.setDate(day);

  console.log("Year is " + d.getFullYear());
  console.log("Month is " + d.getMonth());
  console.log("Day is " + d.getDate());
}
run(2023, 7, 8);
/*
Year is 2023
Month is 7
Day is 8
*/
