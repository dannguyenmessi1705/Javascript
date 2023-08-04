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

// Sort ngược (lon -> be)
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
6 kiểu dữ liệu khi đổi ra kiểu boolean là false
- ""
- 0
- NaN
- null
- undified
- fasle
*/
// Toan tu && - Trong mệnh đề điều kiện, nếu nó có 1 trong 6 kiểu dữ liệu trên thì kq -> false, ngược lại -> gia tri sau cùng
// Toan tu || - Trong mệnh đề điều kiện, nó sẽ ưu tiên kq lấy giá trị của mệnh đề đầu tiên, -> false nếu tất cả mệnh đề thuộc 6 kiểu dữ liệu trên
const ex3 = () => {
  let and = "A" && null && 0 && "C";
  console.log(and);
  let or = null || "B" || "C";
  console.log(or);
};
ex3();

// Toán tử === (tuyệt đối) để so sánh 2 biến, -> true nếu cả 2 biến đó có giá trị bằng nhau và đều cùng thuộc 1 kiểu dữ liệu, tương tự với !== và ngược lại
// Toán tử == sẽ so sánh 2 biến, -> true nếu 2 biến đó có giá trị bằng nhau, cho dù khác kiểu dữ liệu, tương tự với != và ngược lại
function ex4() {
  let a = "1",
    b = 1;
  let condition1 = a === b;
  let condition2 = a == b;
  console.log(condition1, condition2);
}
ex4();
