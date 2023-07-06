// concat(Array) -> noi 2 mang voi nhau. \
// VD, noi mang b vao sau mang a
let Concat = (a, b) => {
  newArray = a.concat(b);
  console.log(newArray);
};
Concat([1, 2, 3], ["A", "B", "C"]); // [ 1, 2, 3, 'A', 'B', 'C' ]

// every(function) -> Kiem tra dieu kien cac phan tu trong mang, -> true: neu tat ca menh de dung, fasle: neu 1 trong cac menh de sai
// function(element, index(optional), array(optional))
let Every = () => {
  arr = [1, 8, 9, 13, 17, 22];
  let con = (element) => {
    return element % 2 == 0;
  };
  let check = arr.every(con);
  if (check == true) {
    console.log("Dieu kien dung");
  } else {
    console.log("Dieu kien sai");
  }
};
Every(); // Dieu kien sai

// some(function) -> Tuong tu nhu every, tuy nhien chi can 1 menh de dung -> true, tat ca menh de sai -> false
// function(element, index(optional), array(optional))
let Some = () => {
  arr = [1, 2, 3, 4, 5];
  let con = (element) => {
    return element % 2 == 0;
  };
  let check = arr.some(con);
  check == true ? console.log("Dieu kien dung") : console.log("Dieu kien sai");
};
Some(); // Dieu kien dung

// filter(functiom) -> Tra ve 1 mang co cac gia tri thoa man dieu kien loc
// function(element, index(optional), array(optional))
let Filter = () => {
  arr = [-3, -2, 1, 2, 3];
  let con = (element) => {
    return element > 0;
  };
  let newarr = arr.filter(con);
  console.log(newarr);
};
Filter(); // [ 1, 2, 3 ]

// find(function) -> tra ve gia tri dau tien duoc tim thay trong mang, neu khong tim thay tra ve undified
// findIndex(function) -> tra ve chi so dau tien duoc tim thay trong mang, neu khong tim duoc tra ve -1
// function(element, index(optional), array(optional))
let Find = () => {
  let arr = [-2, -1, 0, 1, 2];
  let con = (element) => {
    return element >= 0;
  };
  let value = arr.find(con);
  let index = arr.findIndex(con);
  if (value != undefined) console.log(value, index);
  else console.log("Not found");
};
Find(); // 0 2

// forEach(function) -> liet ke tat ca cac gia tri (thoa man dieu kien) trong mang
// function(element, index(optional), array(optional))
let ForEach = () => {
  let arr1 = [1, 2, 3, 4, 5];
  let con1 = (element) => {
    console.log(element);
  };
  arr1.forEach(con1); // 0 1 2 3 4 5

  let arr2 = [1, 12, 33, 24, 23];
  let con2 = (element, index, arr) => {
    if (element % 2 == 0) {
      console.log("a[" + index + "] = " + element);
    }
  };
  arr2.forEach(con2); // a[1] = 12, a[3] = 24
};
ForEach();

// includes( (value1,...), startIndex) -> kiem tra value co trong mang hay khong bat dau tim kiem tu gia tri startIndex
// startIndex mang dau (+), neu la (-) thi chi so trong mang = arr.length + startIndex
let Includes = () => {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = ["Dog", "Cat", "Duck", "Bird"];
  let check1 = arr1.includes(2); // true
  let check2 = arr1.includes(2, 3); // fasle (do bat dau tim tu vi tri thu 3)
  let check3 = arr1.includes(2, -1); // fasle (do bat dau tim tu vi tri thu 4 = (arr.length (5) + (-1)) )
  let check4 = arr1.includes((1, 5), 0); //true
  let check5 = arr2.includes("Dog", "Cat"); // true
  console.log(check1, check2, check3, check4, check5);
};
Includes();

// indexOf(value, startIndex) -> tra ve chi so (index) dau tien ma gia tri duoc tim thay, neu khong tim duoc -> -1
// lastIndexOf(value, startIndex ) -> tra ve chi so (index) cuoi cung ma gia tri duoc tim thay, neu khong tim duoc -> -1
// startIndex mang dau (+), neu la (-) thi chi so trong mang = arr.length + startIndex
let Index = () => {
  let arr1 = [1, 1, 2, 2, 3, 3, 4, 4];
  let pos1 = arr1.indexOf(1); // 0
  let pos2 = arr1.indexOf(1, 1); // 1
  let pos3 = arr1.indexOf(4); // 6
  let pos4 = arr1.lastIndexOf(4); // 7
  console.log(pos1, pos2, pos3, pos4);
};
Index();

// join('argurment') -> (String) Noi tat ca cac phan tu cua mang thanh 1 chuoi ngan cach boi dau duoc dua vao lam doi so
let Join = () => {
  let arr = [1, 2, 3, 4, 5];
  let str = arr.join("->"); // 1->2->3->4->5
  console.log(str);
};
Join();

