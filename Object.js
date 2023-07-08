function ex1() {
  // Cach khai bao Object thu 1
  // object = [{ob1},{ob2}]
  let date = new Date();
  let year = date.getFullYear();
  // them 1 bien tu ben ngoai
  let emailObject = "email";
  let students = {
    name: "Dan", // Properties
    dob: 2002,
    address: "Hung Yen",
    [emailObject]: "danprohy@gmail.com", // Bien truyen vao phai de tong dau ngoac vuong => email: "danprohy@gmail.com"
    getAge: function () {
      // Method()
      return year - this.dob;
    },
  };
  // Xoa key
  delete students.email;
  console.log(students);
  console.log(students.getAge());
  // Cach khai bao Object thu 2, tao Object Constructor
  function Obj(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  let cars = new Obj("Honda", 2006);
  let cars2 = new Obj("Suzuki", 2000);
  console.log(cars);
  console.log(`The car ${cars.brand} is ${year - cars.year} years old`);
  console.log(cars2);
  console.log(`The car ${cars2.brand} is ${year - cars2.year} years old`);
}
ex1();

// Object.assign(), copy thuoc tinh va gia tri den object khac, se bi ghi de neu co trung thuoc tinh
function ex2() {
  let target = {
    a: "1",
    b: "2",
  };
  let source1 = {
    a: "0",
    c: "3",
  };
  let source2 = {
    d: "4",
    e: "5",
  };
  Object.assign(target, source1, source2);
  console.log(target);
}
ex2();

// Object.create() => tao 1 object moi dua tren thuoc tinh, phuong thuc cua phuong thuc cu
function ex3(name, age) {
  let person = {
    name: "",
    age: "",
    output: () => {
      console.log(`My name is ${name} and I am ${age} years old`);
    },
  };
  let me = Object.create(person);
  me.name = name;
  me.age = age;
  me.output();
}
ex3("Dan", 22);

// Object.entries - tra ve mang chua cac mang thuoc tinh (key) va mang gia tri (value)
function ex4() {
  let num = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  };
  let array = Object.entries(num);
  console.log(array);
}
ex4();

// Object.keys() - tra ve thuoc tinh (keys) cua Object
// Object.values() - tra ve gia tri (values) cua key trong Object
function ex5() {
  let fruit = {
    type: "Banana",
    size: "big",
    quantity: 10,
  };
  let tp = Object.keys(fruit).join("\n");
  console.log(tp);
  let vl = Object.values(fruit).join("\n");
  console.log(vl);
}
ex5();

// Them thuoc tinh, phuong thuc tu ben ngoai bang prototype, Ap dung cho Object, String, Array
const ex6 = () => {
  let day = new Date();
  const User = function (name, salary, dob) {
    this.name = name;
    this.salary = salary;
    this.dob = dob;
  };
  const admin = new User("Admin", 13000, 2000);
  console.log(admin);
  // Them phuong thuc, thuoc tinh bang prototype
  User.prototype.getAge = function () {
    return day.getFullYear() - this.dob;
  };
  console.log(admin.getAge());
};
ex6();
