/**
-- function.apply(this, [value1, value2, ...]) -> là 1 phương thức dùng để gọi hàm, và thay đổi giá trị của this
-- Nó tương tự như function.call(), nhưng tham số thứ 2 của nó là 1 mảng các tham số của hàm
*/

// *** VD call() vs apply()
const player = {
  name: "Messi",
  age: 36,
};
const showMessage = (message1, message2) => {
  console.log(`${message1} ${this.name} ${this.age} ${message2}`);
};
showMessage.call(player, "Hello", "Goodbye"); // call sẽ bind this vào player, và truyền tham số cho hàm showMessage
// Hello Messi 36 Goodbye
showMessage.apply(player, ["Hello", "Goodbye"]); // apply sẽ bind this vào player, và truyền tham số dưới dạng mảng cho hàm showMessage
// Hello Messi 36 Goodbye

// *** VD dùng apply() để tìm giá trị lớn nhất trong mảng
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(Math, numbers); // Math.max() là 1 hàm của Math, nên this sẽ tham chiếu đến Math
console.log(max); // 5

// *** VD dùng apply() để mượn hàm
const you = {
  name: "Thắng",
  isOnGame: false,
  live() {
    this.isOnGame = true;
    console.log(`${this.name} is playing game`);
  },
  offline() {
    this.isOnGame = false;
    console.log(`${this.name} is offline`);
  },
};
const me = {
  name: "Đan",
  isOnGame: false,
};
you.live(); // Thắng is playing game
you.live.call(me); // Đan is playing game (vì this của hàm live() thuộc you đã được bind đến me => me lấy hàm của you)
you.offline.call(me); // Đan is offline (vì this của hàm offline() thuộc you đã được bind đến me => me lấy hàm của you)

// *** VD dùng apply() để kế thừa hàm (vì nó nhận tham số dưới dạng mảng nên ta có thể dùng rest parameter)
// function.apply(this, [...arguments]) ngắn hơn rất nhiều khi dùng call()
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
const Student = function (className) {
  Person.apply(this, [...arguments]); // this ở đây là Student (nó gọi tới hàm của Person), nên this.name = name, this.age = age
  this.className = className;
};
const student = new Student("Hai", 19, "FE68");
console.log(student); // Student {name: "Hai", age: 19, className: "FE68"}
