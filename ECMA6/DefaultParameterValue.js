/*
Default Parameter Value: Là 1 biến nó sẽ gán giá trị mặc định (mình chọn) khi nó không được gọi tới (undefined) 
*/
// VD1 ES6
const ex1 = (a = "Giá trị mặc định") => {
  console.log(a);
};
ex1("Không phải giá trị mặc định"); // Output: Không phải giá trị mặc định (Khi đối số a được truyền vào thì nó sẽ có giá trị theo đối số đó)
ex1(); // Output: Giá trị mặc định (Khi không có đối số truyền vào thì nó sẽ nhận giá trị mặc định mà ta đã đặt sẵn)

// CODE tương tự trong ES5
const ex2 = (a) => {
  if (typeof a === "undefined") console.log("Giá trị mặc định");
  else console.log(a);
};
ex2("Không phải giá trị mặc định"); // "Không phải giá trị mặc định"
ex2(); // Giá trị mặc định

// VD2, trong trường hợp khác
const ex3 = (a, b = "log") => {
  console[b](a); // vì b là chuỗi ta truyền vào trong dấu []
};
// Khi b không được truyền vào, hàm sẽ mặc định là console.log(a)
ex3(3); // 3
ex3(3, "warn"); // warnning(Chrome) 3 (Cảnh báo)
ex3(3, "error"); // error(Chrome) 3 (Lỗi)
