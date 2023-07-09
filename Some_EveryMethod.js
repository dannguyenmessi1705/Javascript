// Tạo hàm mySome có chức năng giống với hàm some()
Array.prototype.mySome = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiểm tra chỉ số i có thuộc chỉ số mảng ban đầu hay ko, vì khi tự định nghĩa thêm 1 method, chỉ số của Array sẽ tự động tăng lên với giá trị đúng bằng tên method ta vừa tạo
      let check = callback(this[i], i, this);
      if (check) return true;
    }
  }
  return false;
};
let arr = [1, 3, 5, 7];
// Kiểm tra xem trong mảng có phần tử chẵn hay ko
console.log(
  arr.mySome((element, index, arr) => {
    return element % 2 === 0;
  })
); // false

// Tạo hàm myEvery có chức năng giống hàm every()
Array.prototype.myEvery = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiểm tra chỉ số i có thuộc chỉ số mảng ban đầu hay ko, vì khi tự định nghĩa thêm 1 method, chỉ số của Array sẽ tự động tăng lên với giá trị đúng bằng tên method ta vừa tạo
      let check = callback(this[i], i, this);
      if (!check) return false;
    }
  }
  return true;
};
// Kiểm tra tât cả giá trị trong mảng có phải là số lẻ không
console.log(
  arr.myEvery((element, index, arr) => {
    return element % 2 === 1;
  })
); // true
