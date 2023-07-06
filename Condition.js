function run(year) {
  if (year % 4 == 0 && year % 100 != 0) console.log(year + " is a leap year");
  else console.log(year + " is not a leap year");
}
run(2016);

// switch - case
function ex1(channel) {
  let name = "";
  switch (channel) {
    case 1:
      name += "VTV1";
      break;
    case 2:
      name += "VTV2";
      break;
    case 3:
      name += "VTV3";
      break;
    default:
      name += "No channel";
  }
  console.log(name);
}
ex1(3);

// Sort nguoc (lon -> be)
function ex2(a, b, c, d) {
  var sorted_str = "";
  let arr = [a, b, c, d];
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    sorted_str += arr[i];
    if (i < arr.length - 1) sorted_str += ",";
  }

  console.log(sorted_str);
}
ex2(9, 2, 4, 1);
/*
6 kieu du lieu khi tra ve boolean la false
- ""
- 0
- NaN
- null
- undified
- fasle
*/
// Toan tu && - Trong menh de dieu kien, neu no co 1 trong 6 kieu du lieu tren thi kq se tra ve false, nguoc lai nos se lay gia tri sau cung
// Toan tu || - Trong menh de dieu kien, no se uu tien lay toan tu dau tien, chi tra ve false neu tat ca menh de deu thuoc 6 kieu du lieu tren
function ex3() {
  let and = "A" && "B" && "C";
  console.log(and);
  let or = "A" || "B" || "C";
  console.log(or);
}
ex3();

// Toan tu === (tuyet doi) de so sanh 2 bien, tra ve true neu ca 2 bien do co gia tri bang nhau va deu cung thuoc 1 kieu du lieu, tuong tu voi !== va nguoc lai
// Toan tu == se so sanh 2 bien, tra ve true neu 2 bien do co gia tri bang nhau, cho du khac kieu du lieu, tuong tu != va nguoc lao
function ex4() {
  let a = "1",
    b = 1;
  let condition1 = a === b;
  let condition2 = a == b;
  console.log(condition1, condition2);
}
ex4();
