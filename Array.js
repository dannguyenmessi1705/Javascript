// concat(Array) -> noi 2 mang voi nhau. \
// VD, noi mang b vao sau mang a
let Concat = (a, b) => {
  newArray = a.concat(b);
  console.log(newArray);
};
Concat([1, 2, 3], ["A", "B", "C"]); // [ 1, 2, 3, 'A', 'B', 'C' ]

// every(function) -> Kiem tra dieu kien cac phan tu trong mang, -> true: neu tat ca menh de dung, fasle: neu 1 trong cac menh de sai
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
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
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
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
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
let Filter = () => {
  arr = [-3, -2, 1, 2, 3];
  let con = (element) => {
    return element > 0;
  };
  let newarr = arr.filter(con);
  console.log(newarr);
};
Filter(); // [ 1, 2, 3 ]

// find(function) -> tra ve gia tri dau tien duoc tim thay trong mang, neu khong tim thay tra ve undifined
// findIndex(function) -> tra ve chi so dau tien duoc tim thay trong mang, neu khong tim duoc tra ve -1
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
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
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
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

// *** slice(start), slice(start, end) -> Cat phan tu cua mang tu vi tri con tro la start toi vi tri phan tu end-1 (con tro tai end), co the truyen gia tri am
// neu chi co 1 tham so, => no se cat chuoi tu vi tri tham so den het chuoi
// neu chi co 1 tham so, tham so do la am (-), => no se cat tu vi tri str.length - tham so(-) do.
let Slice = () => {
  let arr = ["PES", "FIFA", "Vice City", "Dream League Soccer"];
  let arr2 = arr.slice(1, 2); // ["FIFA"]
  let arr3 = arr.slice(-3, -1); // ["FIFA", "Vice City"]
  console.log(arr2 + "\n" + arr3);
};
Slice();

// *** Splice(pos) -> Tra ve mang tu vi tri con tro pos den het mang, dong thoi lam thay doi phan tu o mang goc
// *** Splice(stat, num) -> Tra ve mang tu vi tri con tro start toi num phan tu, dong thoi lam thay doi phan tu o mang goc
// *** Splice(start, num, value1, value2, ...) -> (Chen) Tra ve mang da bi thay the, dong thoi lam thay doi phan tu o mang goc
let Splice = () => {
  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr.splice(2);
  console.log("Goc:", arr, "Gia tri da cat", arr2); // Goc: [ 1, 2 ] Gia tri da cat [ 3, 4, 5 ]
  let arrb = [1, 2, 3, 4, 5];
  let arr3 = arrb.splice(1, 3);
  console.log("Goc:", arrb, "Gia tri da cat:", arr3); // Goc: [ 1, 5 ] Gia tri da cat: [ 2, 3, 4 ]
  let arrc = [1, 2, 3, 4, 5];
  let arr4 = arrc.splice(2, 0, 10);
  console.log("Goc:", arrc, "Gia tri da cat:", arr4); // (Chen) Goc: [ 1, 2, 10, 3, 4, 5 ] Gia tri da cat: []
  let arrd = [1, 2, 3, 4, 5];
  let arr5 = arrd.splice(3, 5, 8, 9, 7);
  console.log("Goc:", arrd, "Gia tri da cat:", arr5); // (Thay doi + Chen) Goc: [ 1, 2, 3, 8, 9, 7 ] Gia tri da cat: [ 4, 5 ]
};
Splice();

// map(function) -> tra ve 1 mang moi sau khi da thuc hien function
// function(element, index(optional), array(optional){...code...}, that(optinal)) element = gia tri, index bat dau tu 0, array dai dien ten mang, that = gia tri gan thay cho this ben trong ham callback
let Map = () => {
  let arr = [1, 2, 3, 4];
  let func = (element, index, arr) => {
    if (index < 2) return element ** 2;
  };
  let output = arr.map(func);
  console.log(output);
};
Map(); // [ 2, 4, undefined, undefined ] (cac gia tri con lai ko thoa man dieu kien se tro thanh undifined)

/* shift() -> tra ve gia tri dau tien cua mang, dong thoi thay doi mang sau khi bi xoa gia tri dau
  unshift(element1, ....) -> tra ve chieu dai cua mang sau khi them cac element vao dau mang, dong thoi thay doi mang sau khi them gia tri
  pop() -> tra ve gia tri cuoi cung cua mang, dong thoi thay doi mang sau khi xoa gia tri cuoi
  push(element1, ...) -> tra ve chieu dai cua mang sau khi them cac element vao cuoi mang, dong thoi thay doi mang sau khi them gia tri
  reverse() -> tra ve dao nguoc cua 1 mang, dong thoi cung dao nguoc mang goc
  */
let Change = () => {
  let arr = [4, 5, 6]; // length = 3
  let first = arr.shift();
  console.log(first, " & ", arr); // first = 4, arr = [5, 6]
  let addFirst = arr.unshift(2, 3);
  console.log(addFirst, " & ", arr); // addFirst = arr.length = 4, arr = [2, 3, 5, 6]
  let last = arr.pop();
  console.log(last, " & ", arr); // last = 6, arr = [2, 3, 5]
  let addLast = arr.push(0, 0, 0);
  console.log(addLast, " & ", arr); // addLast = arr.length = 6, arr = [2, 3, 5, 0, 0]
  let arr_rev = arr.reverse();
  console.log("arr: ", arr, "\narr_rev: ", arr_rev); //arr:  [ 0, 0, 0, 5, 3, 2 ]. arr_rev:  [ 0, 0, 0, 5, 3, 2 ]
};
Change();

/* sort(function) -> tra ve ham da duoc sap xep theo chieu nho -> lon, mac dinh khong truyen function vao, 
  phan tu mang se chuyen ve string roi so sanh. VD(Banana > Coconut), (1 > 20)
  De so sanh so, tranh truong hop (1 > 20), ta phai viet them function
  ** function(a, b) -> return a-b (sap xep tang(Number)) 
  ** function(a, b) -> return b-a (sap xep giam(Number)) hoac return (+) (lay chi so b lam goc (=0), dat chi so cua a ra sau b)
  ** function(a, b) -> return 0  (giu nguyen vi tri cua a va b)
  ** function(a, b) -> return -1 (Chi so b lam goc (=0), dat chi so cua a len truoc b)
  ** function(a, b) -> return 1 (Chi so b lam goc (=0), dat chi so cua a ra sau b)
*/
let Sort = () => {
  let person = [
    {
      name: "Dan",
      age: 22,
    },
    {
      name: "Nguyen",
      age: 18,
    },
    {
      name: "Bao",
      age: 20,
    },
    {
      name: "Yen",
      age: 40,
    },
  ];
  // Ham xep tuoi tang
  let inc = (a, b) => {
    return a.age - b.age;
  };
  // Ham xep giam
  let dec = (a, b) => {
    return b.age - a.age;
  };
  person.sort(inc);
  console.log(person); // (18, 20, 22, 40)
  person.sort(dec);
  console.log(person); // (40, 22, 20, 18)
  // Ham xep theo ten tang dan
  let sortnName = (a, b) => {
    nameA = a.name.toUpperCase(); //Chuyen ve cung 1 chu Hoa
    nameB = b.name.toUpperCase(); //Chuyen ve cung 1 chu Hoa
    if (nameA > nameB)
      return 1; // lay chi so nameB lam goc (=0). Thuc hien chuyen chi so cua nameA ra sau nameB (>0)
    else if (nameA < nameB)
      return -1; // lay chi so nameB lam goc (=0). Thuc hien chuyen chi so cua nameA len truoc nameB (<0)
    else return 0; // Khong thuc hien sap xep
  };
  person.sort(sortnName);
  console.log(person);
};
Sort();
