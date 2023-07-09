// concat(Array) -> nối 2 mảng với nhau
// VD, nối mảng b vào mảng a
let Concat = (a, b) => {
  newArray = a.concat(b);
  console.log(newArray);
};
Concat([1, 2, 3], ["A", "B", "C"]); // [ 1, 2, 3, 'A', 'B', 'C' ]

// every(function) -> Kiểm tra điều kiện các phần tử trong mảng, -> true: nếu tất cả phần tư thoã mãn điều kiện, fasle: nếu 1 trong các phần tử không thoả mãn điều kiện
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback
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

// some(function) -> Tương tự như every, tuy nhiên chỉ cần 1 phần tử thoả mãn điều kiện -> true, tất cả phần tư không thoả mãn -> false
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback

let Some = () => {
  arr = [1, 2, 3, 4, 5];
  let con = (element) => {
    return element % 2 == 0;
  };
  let check = arr.some(con);
  check == true ? console.log("Dieu kien dung") : console.log("Dieu kien sai");
};
Some(); // Dieu kien dung

// filter(functiom) ->  trả về 1 magr có các phần tử thoa mãn điều kiện
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback
let Filter = () => {
  arr = [-3, -2, 1, 2, 3];
  let con = (element) => {
    return element > 0;
  };
  let newarr = arr.filter(con);
  console.log(newarr);
};
Filter(); // [ 1, 2, 3 ]

// find(function) -> trả về phần tử đầu tiên thoả mãn điều kiện trong mảng, trả về 'undifined' nếu không tìm thấy
// findIndex(function) -> trả về chỉ số của phần tử đầu tiên thoả mãn điều kiện trong mảng, -> -1 nếu không tìm thấy
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback
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

// forEach(function) -> duyệt qua tất cả các giá trị trong mảng, có thể có hoặc không cần trả về 1 giá trị
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback
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

// includes( (value1,...), startIndex) -> kiểm tra các giá trị nhập vào có trong mảng hay không
// startIndex: Mảng bắt đầu tìm kiếm từ chỉ số startIndex trở đi
// startIndex mang dấu dương (+), nếu là âm (-) thì chỉ số = arr.length + startIndex
let Includes = () => {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = ["Dog", "Cat", "Duck", "Bird"];
  let check1 = arr1.includes(2); // true
  let check2 = arr1.includes(2, 3); // fasle (do bắt đầu tìm từ vị trí thứ 3)
  let check3 = arr1.includes(2, -1); // fasle (do bắt đầu tìm từ vị trí thứ 4 = (arr.length (5) + (-1)) )
  let check4 = arr1.includes((1, 5), 0); //true
  let check5 = arr2.includes("Dog", "Cat"); // true
  console.log(check1, check2, check3, check4, check5);
};
Includes();

// indexOf(value, startIndex) -> trả về chỉ số của phần tử đầu tiên thoả mãn điều kiện trong mảng, -> -1 nếu không tìm thấy
// lastIndexOf(value, startIndex ) -> trả về chỉ số của phần tử cuối cùng thoả mãn điều kiện trong mảng, -> -1 nếu không tìm thấy
// startIndex mang dấu dương (+), nếu là âm (-) thì chỉ số = arr.length + startIndex
let Index = () => {
  let arr1 = [1, 1, 2, 2, 3, 3, 4, 4];
  let pos1 = arr1.indexOf(1); // 0
  let pos2 = arr1.indexOf(1, 1); // 1
  let pos3 = arr1.indexOf(4); // 6
  let pos4 = arr1.lastIndexOf(4); // 7
  console.log(pos1, pos2, pos3, pos4);
};
Index();

// join('argurment') -> (String) Nối tất cả các phần tử cua mảng thành 1 chuỗi ngắn cách bới ký tự agurment được đưa vào làm đối số
let Join = () => {
  let arr = [1, 2, 3, 4, 5];
  let str = arr.join("->"); // 1->2->3->4->5
  console.log(str);
};
Join();

// *** slice(start), slice(start, end) -> Cắt phần tử của mảng từ vị trí con trỏ thứ start vị trí con trỏ thứ end (phần tử thứ end-1), có thể truyền đối số âm (-)
// nếu chi có 1 tham số, => nó sẽ cắt chuỗi từ vị trí truyền vào đến hết chuỗi
// nếu chi có 1 tham số, tham số đó là âm (-), => nó sẽ cắt từ vị trí str.length - đối số âm (-) truyền vào.
let Slice = () => {
  let arr = ["PES", "FIFA", "Vice City", "Dream League Soccer"];
  let arr2 = arr.slice(1, 2); // ["FIFA"]
  let arr3 = arr.slice(-3, -1); // ["FIFA", "Vice City"]
  console.log(arr2 + "\n" + arr3);
};
Slice();

// *** Splice(pos) -> Trả về mảng từ vị trí con trỏ thứ pos đến hết mảng gốc, đồng thời làm thay đổi (xoá) phần tử của mảng gốc
// *** Splice(stat, num) -> Trả về mảng từ vị trí con trỏ thứ start có độ dài num phần tử của mảng gốc, đồng thời làm thay đổi (xoá) phần tử của mảng gốc
// *** Splice(start, num, value1, value2, ...) -> (Chèn) Trả về 1 mảng bị thay thế, đồng thời làm thay đổi (chèn) phần tử vào mảng gốc
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

// map(function) -> Hàm xử lý mảng theo yêu cầu tuỳ thuộc vào fuction tự định nghĩa chức năng của map
// function(element, index(optional), array(optional){...code...}, thisAgr(optinal)) element = giá trị, index: chỉ số(bắt đầu từ 0), array: trả về array gốc, thisAgr = giá trị gán thay cho khoá 'this' bên trong hàm callback
let Map = () => {
  let arr = [1, 2, 3, 4];
  let func = (element, index, arr) => {
    if (index < 2) return element ** 2;
  };
  let output = arr.map(func);
  console.log(output);
};
Map(); // [ 2, 4, undefined, undefined ] (các giá trị còn lại ko thoả mãn điều kiện -> undifined)

// reduce(function, initialValue(optional)) -> trả về 1 gia trị sau khi thực hiện fuction; initialValue giá trị khởi tạo, có thể là kiểu Number, array, string,...
// function(accumulator, currentElement, indexElement(optional), originArray(optional))
// accumulator: Biến lưu trữ, sử dụng để trả về kết quả cho hàm;
// currentElement: Giá trị của phần tử hiện tại trong mảng;
// indexElement: Chỉ số của phần tử hiện tại trong mảng;
// originArray: ->  Mảng gốc ban đầu
// Ban đầu accumulation === initialValue, nếu ko truyền đối số initialValue, tự động accumulation === element[0] của array, lúc đó currentElement === element[1]
let Reduce = () => {
  let arr = [1, 2, 3, 4, 5];
  const Sum = (sum, element, index, arr) => {
    return (sum += element);
  };
  let sum = arr.reduce(Sum, 0);
  console.log(sum); // 0+1+2+3+4+5 = 15
};
Reduce();

/* shift() -> trả về giá trị đầu tiên của mảng, đồng thời xoá giá trị đầu tiên của mảng gốc
  unshift(element1, ....) -> trả về chiều dài của mảng sau khi thêm các giá trị vào đầu mảng, đồng thời mảng gốc thay đổi
  pop() -> trả về giá trị cuối cùng của mảng, đồng thời xoá giá trị cuối cùng của mảng gốc
  push(element1, ...) -> trả về chiều dài của mảng sau khi thêm các giá trị vào cuối mảng, đồng thời mảng gốc thay đổi
  reverse() -> đảo ngược mảng gốc
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

/* sort(function) -> mặc định không truyền function vào, trả về array đã được sắp xếp theo chiều tăng dần theo (Unicode) 
  phần tử của mảng sẽ chuyển về String rồi so sánh. VD(Banana > Coconut), (1 > 20)
  Để so sánh số, tránh TH (1 > 20), ta phải viết thêm function truyền vào
  ** function(a, b) -> return a-b (sắp xếp tắngg(Number)) 
  ** function(a, b) -> return b-a (sắp xếp giảm(Number))
  ** function(a, b) -> return 0  (giữ nguyên vị trí của a và b)
  ** function(a, b) -> return -1 (Lấy chỉ số b làm gốc (=0), vì return (-) => đặt a lên trước b)
  ** function(a, b) -> return 1 (Lấy chỉ số b làm gốc (=0), vì return (+) => đặt a ra sau b)
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
    nameA = a.name.toUpperCase(); //Chuyển về cùng kiểu chữ hoa để so sánh
    nameB = b.name.toUpperCase(); //Chuyển về cùng kiểu chữ hoa để so sánh
    if (nameA > nameB)
      return 1; // lấy chỉ sô nameB làm gốc (=0). Thực hiện đổi phần tử nameA ra sau nameB (>0)
    else if (nameA < nameB)
      return -1; // lay chi so nameB làm gốc (=0). Thực hiện đổi phần tử nameA lên trước nameB (<0)
    else return 0; // Khong thuc hien sap xep
  };
  person.sort(sortnName);
  console.log(person);
};
Sort();

/*
Tất cả hàm every(), some(), forEach(), filter(), find(), map(), reduce(),.. liên quan đến việc tìm và xử lý mảng thực ra
hoạt động như 1 vòng lặp for, nó lặp qua tất cả các phần tử của mảng
sau mỗi lần lặp, nó sẽ thục hiên 1 hàm callback được truyềb vào nó các callback này hoạt động giống như việc chạy code trong 1 khối block for
*/
