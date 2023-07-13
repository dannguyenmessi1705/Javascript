/*
- Destructuring: Phân rã các giá trị trong mảng hoặc trong object ra ngoài thành biến
- Rest: Toán tử lấy các phần giá trị còn lại trong mảng, object, function
*/

// *** VD không dùng Destructuring với Array
const arr = [1, 2, 3, 4];
// Muốn lấy các giá trị bên trong arr, gán từng biến cho nó
let a = arr[0],
  b = arr[1],
  c = arr[2],
  d = arr[3];
console.log(a, b, c, d); // 1 2 3 4
// *** Dùng Destructuring, chỉ cần ngắn gọn như sau
let [a1, b1, c1, d1] = arr; // Bao nhiêu đối số lấy bao nhiêu giá trị của arr
console.log(a1, b1, c1, d1); // 1 2 3 4
let [a2, , , d2] = arr; // Không muốn lấy giá trị vào thì ta để rỗng sau dấu ","
console.log(a2, d2); // 1 4
// *** Rest lấy các phần tử còn lại trong mảng bằng cách thêm '...' vào trước toán tử, toán tử sẽ trả về Array
let [a3, ...rest] = arr; // a2 = 1, rest = [2, 3, 4]
console.log(rest); // [2, 3, 4]

// *** VD Không dùng Destructuring với Object
const obj = {
  name: "Messi",
  age: 36,
  nation: "Argentina",
  children: {
    name: "Thiago",
    age: 10,
  },
};
let e = obj.name,
  f = obj.age,
  g = obj.nation,
  h = obj.children.name,
  i = obj.children.age;
console.log(e, f, g, h, i); // Messi 36 Argentina Thiago 10
// *** Dùng Destructuring, ta truyền đối số vào giữa 2 dấu {}, bao nhiêu đối số lấy bấy nhiêu thuộc tính của object,
// tuy nhiên đối số truyền vào phải bằng key của object
// Nếu object có 1 object con có key(child) = key(parent) thì ta phải định nghĩa lại cho key bằng cách "key : newValue"
let {
  name: parentName,
  age: parentAge,
  nation,
  children: { name: childName, age: childAge },
} = obj;
console.log(parentName, parentAge, nation, childName, childAge); // Messi 36 Argentina Thiago 10
// *** Rest, lấy các key còn lại trong Object, bằng cách thêm '...' vào trước toán tử, toán tử sẽ trả về kiểu Object
// Giả sử ta không muốn lấy thuộc tính name, age, chỉ lấy nation, children
let { name, age, ...rest1 } = obj;
console.log(rest1); // { nation: 'Argentina', children: { name: 'Thiago', age: 10 } }

// *** Ngoài ra toán tử ...rest còn được dùng trong hàm với mục đích muốn truyền rất nhiều đối số vào đó, nó sẽ luôn có kiêu là Array
const logger = (a, ...params) => {
  console.log(params);
};
logger(1, 2, 3, 4); // [ 2, 3, 4 ] (Do params lấy phần tử còn lại trừ phần tử đầu tiên truyền vào)
logger({ d: 1, e: 2 }, { a: 2, c: 4 }); // [ { a: 2, c: 4 } ]

// *** Ví đụ thực hành với Destructuring, Rest
const ex = () => {
  const obj = [
    {
      name: "Dan",
      age: 18,
      mark: {
        math: [9, 9, 9],
        art: [5, 6, 10],
        music: [10, 7, 6],
      },
    },
    {
      name: "Vu",
      age: 18,
      mark: {
        math: [6, 7, 8],
        art: [2, 7, 3],
        music: [9, 8, 10],
      },
    },
  ];
  // Lấy từng phần tử
  let [
    {
      name: nameA,
      age: ageA,
      mark: markA = { math: mathA, art: artA, music: musicA },
    },
    {
      name: nameB,
      age: ageB,
      mark: markB = { math: mathB, art: artB, music: musicB },
    },
  ] = obj;
  console.log(nameA, ageA, markA, nameB, ageB, markB);
  // Dan 18 { math: [ 9, 9, 9 ], art: [ 5, 6, 10 ], music: [ 10, 7, 6 ] } Vu 18 { math: [ 6, 7, 8 ], art: [ 2, 7, 3 ], music: [ 9, 8, 10 ] }
};
ex();
