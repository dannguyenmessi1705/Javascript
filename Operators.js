function ex1(sum, diff) {
  let a = (sum + diff) / 2,
    b = (sum - diff) / 2;
  return {
    a,
    b,
  };
}
console.log(ex1(10, 2));

function ex2(min) {
  return min * 60;
}
console.log("Convert 3 minutes to second is ", ex2(3));

function ex3(num) {
  let arr = [num + 5, num - 5, num * 5, num / 5, num % 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
ex3(9);
