/*
-- 1. This là 1 keyword, nó sẽ tham chiếu đến đối tượng gọi phương thức đó
-- 2. Nếu this đứng ngoài 1 đối tượng, phương thức, thì this sẽ tham chiếu đến đối tượng window (global object)
-- 3. This trong hàm tạo (constructor) sẽ tham chiếu đến đối tượng được tạo ra từ hàm tạo đó, còn hàm thường thì nó sẽ tham chiếu tới window
-- 4. Khi ơ strict mode, this sẽ tham chiếu đến undefined
-- 5. Các phương thức bind(), call(), apply() có thể tham chiếu this đến 1 đối tượng khác (làm thay đổi giá trị của đối tượng khác)
-- 6. khi gọi phương thức mà không có đối tượng nào gọi, thì this sẽ tham chiếu đến window (global object)
-- Lưu ý, arrow function không có this, nó sẽ tham chiếu đến this của hàm bên ngoài nó
*/

// VD 1.
let person = {
  name: "Dan",
  age: 22,
  output: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`); // this.name, this.age sẽ tham chiếu đến đối tượng person
  },
};
person.output(); // My name is Dan and I am 22 years old

// VD 2.
function ex1() {
  console.log(this); // this sẽ tham chiếu đến đối tượng window (global object)
}
ex1(); // Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

// VD 3.
function ex2(name, age) {
  this.name = name; // this sẽ tham chiếu đến đối tượng được tạo ra từ hàm tạo ex2
  this.age = age; // this sẽ tham chiếu đến đối tượng được tạo ra từ hàm tạo ex2
  this.output = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`); // this sẽ tham chiếu đến đối tượng được tạo ra từ hàm tạo ex2
  };
}
let me = new ex2("Dan", 22);
me.output(); // My name is Dan and I am 22 years old

// VD 4.
function ex3() {
  "use strict";
  console.log(this); // this sẽ tham chiếu đến undefined
}
ex3(); // undefined

// VD 5.
let person1 = {
  name: "Dan",
  age: 22,
  output: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  },
};
let person2 = {
  name: "John",
  age: 23,
};
person.output(); // My name is Dan and I am 22 years old
person.output.call(person2); // My name is John and I am 23 years old
person.output.apply(person2); // My name is John and I am 23 years old
person.output.bind(person2)(); // My name is John and I am 23 years old

// VD 6.
const name = "Hai";
const obj = {
  name: "Dan",
  getName() {
    console.log(this.name);
  },
};
obj.getName(); // Dan
const Person = obj.getName; // this tham chiếu đến window (global object) vì Person không phải là 1 phương thức của obj
Person(); // Hai
