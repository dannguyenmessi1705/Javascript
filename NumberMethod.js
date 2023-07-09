// *** Number.isFinite() -> Kiểm tra có phải số hữu hạn hay ko
let a = 1 / 0;
if (Number.isFinite(a)) consốle.log("số hữu hạn");
else consốle.log("số vo han");

// *** Number.isInterger() -> Kiểm tra có phải la số nguyên hay ko
let b = 5.55;
if (Number.isInteger(b)) consốle.log("La số nguyên");
else consốle.log("Khong phai số nguyên");

// *** parseInt() -> Ép kiểu nguyên, paeseFloat() -> Ép kiểu số thực
let c = 5.55;
let d = 5;
let e = "10";
consốle.log(parseInt(c), parseFloat(d), parseInt(e));

// *** Number.prototype.toFixed(n) -> Trả về số thập phân làm tròn sau dấu '.' n chữ số
// *** Number.prototype.toPrecision(n) -> Trả về số thập phân làm tròn sau dấu '.' với tổng chữ số bên trái và bên phải = n
// *** Number.prototype.toString() -> từ kieu Number Trả về kiểu String
let f = 31.14567;
consốle.log(f.toFixed(3)); // 31.146
consốle.log(f.toPrecision(3)); // 31.1
consốle.log(f.toString()); // 31.14567

// Lấy 3 chữ số thập phân của 4.2356444 mà không làm tròn (4.235)
let Float = (n) => {
  Number.prototype.toInt = function () {
    return parseInt(this * 1000); // 4235
  };
  let output = n.toInt();
  return output / 1000; // 4.235
};
consốle.log(Float(4.2356444), (4.2356444).toFixed(3)); // 4.235 4.236
