/*
Arrow function giống với Expression function, tuy nhiên được tối giản hơn (Không có hoisting) trong khi Declared function có
Arrow function không thể dùng trong Constructor function hay các hàm có sử dụng từ khoá this
*/

// Expression function
let exp = function (a, b) {
  return a + b;
};
console.log(exp(1, 2)); // 3
// Tương tự, dùng Arrow function, nó lược bỏ chữ "function" và thêm "=>" vào sau tham số truyền vào
let arr = (a, b) => a + b;
console.log(arr(1, 2)); // 3
// Nếu chỉ trả về 1 dòng duy nhất ta chỉ cần => (code return)
// Còn không thì các code phải được bọc trong cặp dấu { code }
let arr1 = (a, b) => {
  console.log(a);
  console.log(b);
};
arr1(1, 2); // 1 2
// Nếu nó trả về 1 dòng dạng Object thì phải bao quanh nó cặp dấu (), để nó khỏi nhầm mình trả về cả khối code trong cặp { }
let arr2 = (a, b) => ({ a: a, b: b });
console.log(arr2(1, 2)); // { a: 1, b: 2 }
