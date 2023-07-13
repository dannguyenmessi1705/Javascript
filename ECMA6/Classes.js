/*
Classes trong JS giống y như Constructor Funtion, nhưng nó sẽ nhìn trông khoa học hơn trong các project lớn 
*/
// Constructor function
let Obj = function (name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
};
let person1 = new Obj("Messi", 36);
console.log(person1); // Obj { name: 'Messi', age: 36, getName: [Function (anonymous)] }
console.log(person1.getName()); // Messi

// Tương tự với Classes
class Obj2 {
  // Các thuộc tính được khai báo gọn hết vào 1 hàm constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Các phương thức thì khai báo ở ngoài, nên lúc in ra, nó chỉ in key, giá trị thuộc tính chứ không in cả tên phương thức
  // Khai báo phương thức cũng gọn hơn
  getName() {
    return this.name;
  }
}
let person2 = new Obj2("Messi", 36);
console.log(person2); // Obj2 { name: 'Messi', age: 36 } (chỉ in ra các thuộc tính)
console.log(person2.getName()); // Messi
