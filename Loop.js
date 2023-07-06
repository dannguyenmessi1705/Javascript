const prompt = require("prompt-sync")();
// for-in in object (Chay lan luot ca thuoc tinh (var) va gia tri cua thuoc tinh obj[var])
function ex1() {
  let person = {
    name: "Dan",
    age: 21,
    sex: "male",
    address: "Hung Yen",
  };

  for (let x in person) {
    console.log(`${x} is ${person[x]}`);
  }

  // Chi in ra thuoc tinh, muon in ra gia tri thi dung nhu mang
  let animal = new Set(["Dog", "Cat", "Duck"]);
  animal["Change"] = "Monkey";
  for (let x in animal) {
    console.log(x, animal[x]);
  }
}
ex1();

// for-of (chay cac gia tri trong vong lap string, array, object)
function ex2() {
  let animal = new Set(["Dog", "Cat", "Duck"]);
  animal["Change"] = "Monkey";
  for (let x of animal) {
    console.log(x, animal[x]);
  }
}
ex2();

// Reverse String
function ex3(str) {
  let str_rv = "";
  for (let x of str) {
    str_rv = x + str_rv;
  }
  console.log(str_rv);
}
function ex4(str) {
  const str_arr = str.split("");
  const arr_rev = str_arr.reverse();
  const str_rev = arr_rev.join("");
  console.log(str_rev);
}
ex3("DanNguyen");
const str = prompt();
ex4(str);
process.stdi