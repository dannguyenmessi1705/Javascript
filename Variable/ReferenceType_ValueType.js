/*
- Value Type (Kiểu tham trị) gồm các kiểu dữ liệu nguyên thuỷ
    + Number
    + String
    + Boolean
    + BigInt
    + Symbol
    + undefined
    + null
=> Mỗi khi khai báo 1 biến mới, sẽ có 1 vùng bộ nhớ mới được cấp phát, kể cả khi gán biến này = biến khác
    - Reference Type (Kiểu tham chiếu) gồm các kiểu dữ liệu không nguyên thuỷ
    + Object
    + Array
    + Function
=> Mỗi khi khai báo 1 biến mới, sẽ có 1 vùng bộ nhớ mới được cấp phát, trừ khi gán biến này = biến khác (vì bản chất khi gán = biến cũ, biến mới chỉ trỏ vào bộ nhớ của biến cũ, có địa chỉ như biến cũ)
*/

// *** VD Tham trị
let a = 1; // Biến a được cấp phát vùng nhớ có địa chỉ #aaa và có giá trị là 1
let b = a; // Biến b được cấp phát vùng nhớ mới có địa chỉ là #bbb và có giá trị = giá trị của a (1)
a = 2; // Thay đổi giá trị của a ở vùng nhớ #aaa, => a = 2, không có tác động đến vùng nhớ #bbb => b = 1
console.log("b =", b); // 1

// *** VD Tham chiếu
const obj1 = {
  name: "Facebook",
}; // Tạo vùng nhớ cho obj1 có địa chỉ là #111, giá trị cũng là #111, địa chỉ này chứa ô nhớ có giá trị {name = "Facebook"}
const obj2 = obj1; // Tạo ra biến obj2, và trỏ giá trị của biến này tới địa chỉ của obj là #111 => nó sẽ luôn tham chiếu vào ô nhớ của obj1
console.log("obj2.name =", obj2.name); // Facebook
obj1.name = "Twitter"; // Thay đổi giá trị ô nhớ của obj1 (địa chỉ #111) là {name = "Twitter"}
console.log("obj2.name =", obj2.name); // Twitter (vì biến obj2 đang trỏ đến ô nhớ #11 của obj1 nên nó sẽ nhận được giá trị mới của obj1)

console.log(obj1 === obj2); // true (vì obj1 và obj2 đều có giá trị là #111)
const obj3 = {
  name: "Twitter",
}; // Tạo obj3 ở vùng nhớ mới có địa chỉ là #333, giá trị là #333, địa chỉ này chứa ô nhớ có giá trị là {name = "Twitter"}
console.log(obj1 === obj3); // false (vì obj1 có giá trị là #111, obj có giá trị là #333)
