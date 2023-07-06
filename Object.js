function ex1() {
  // Cach khai bao Object thu 1
  let date = new Date();
  let year = date.getFullYear();
  let students = {
    name: "Dan",
    age: year - 2002,
    address: "Hung Yen",
  };
  console.log(students);
  // Cach khai bao Object thu 2
  function obj(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  let cars = new obj("Honda", 2006);
  console.log(cars);
  console.log(`The car ${cars.brand} is ${year - cars.year} years old`);
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
