// Callback 1
function ex1_call(sum) {
  console.log(`The sum is ${sum}`);
}
function ex1_cal(callback, a, b) {
  sum = a + b;
  callback(sum);
}
function ex1() {
  ex1_cal(ex1_call, 5, 6);
}
ex1();

// Callback 2
function ex2_call(sum) {
  console.log(`The sum is ${sum}`);
}
function ex2_cal(a, b) {
  sum = a + b;
  ex2_call(sum);
}
function ex2() {
  ex2_cal(7, 8);
}
ex2();

// Callback 3
function ex3_cal(a, b, callback) {
  sum = a + b;
  callback(sum);
}
function ex3() {
  ex3_cal(9, 2, function (sum) {
    console.log("The sum is", sum);
  });
}
ex3();

// Tra ve nhieu doi so, them ... vao truoc tham so truyen vao ham
function ex4(...arguments) {
  let sum = 0;
  for (let param of arguments) {
    sum += param;
  }
  console.log(sum);
}
ex4(1, 2, 3, 4, 5);
