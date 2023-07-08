// *** Number.isFinite() -> Kiem tra co phai so huu han hay ko
let a = 1 / 0;
if (Number.isFinite(a)) console.log("So huu han");
else console.log("So vo han");

// *** Number.isInterger() -> Kiem tra co phai la so nguyen hay ko
let b = 5.55;
if (Number.isInteger(b)) console.log("La so nguyen");
else console.log("Khong phai so nguyen");

// *** parseInt() -> Ep kieu nguyen, paeseFloat() -> Ep kieu so thuc
let c = 5.55;
let d = 5;
let e = "10";
console.log(parseInt(c), parseFloat(d), parseInt(e));

// *** Number.prototype.toFixed(n) -> Tra ve so thap phan lam tron sau dau '.' n chu so
// *** Number.prototype.toPrecision(n) -> Tra ve so thap phan lam tron sau dau '.' voi tong chu so ben trai va phai = n
// *** Number.prototype.toString() -> Tu kieu Number tra ve kieu String
let f = 31.14567;
console.log(f.toFixed(3)); // 31.146
console.log(f.toPrecision(3)); // 31.1
console.log(f.toString()); // 31.14567

// Lay 3 chu so thap phan cua 4.2356444 ma khong lam tron (4.235)
let Float = (n) => {
  Number.prototype.toInt = function () {
    return parseInt(this * 1000); // 4235
  };
  let output = n.toInt();
  return output / 1000; // 4.235
};
console.log(Float(4.2356444), (4.2356444).toFixed(3)); // 4.235 4.236
