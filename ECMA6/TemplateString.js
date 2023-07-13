/*
Template String là dùng 2 dấu "huyền" ` ` để in ra 1 chuỗi + biến, và chuỗi nhập vào như nào thì đầu ra y như vậy
biến (val) được truyền vào bằng cách cho vào cặp ký hiệu sau: ${val}
*/
const ex1 = () => {
  let age = 18;
  let name = "Tom";
  // Dùng mặc định, muốn xuống dòng ta phải thêm "\n"
  console.log("I'm " + name + "\nI'm " + age + " years old");
  // I'm Tom
  // I'm 18 years old

  // Dùng template string, nhập như nào, in như thế
  console.log(`I'm ${name}
  I'm ${age} years old`);
};
//  I'm Tom
//    I'm 18 years old
ex1();
