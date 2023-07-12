// Tự định nghĩa 1 phương thức có chức năng giống với hàm filter()
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiểm tra chỉ số i có thuộc chỉ số mảng ban đầu hay ko, vì khi tự định nghĩa thêm 1 method, chỉ số của Array sẽ tự động tăng lên với giá trị đúng bằng tên method ta vừa tạo
      let check = cb(this[i], i, this);
      if (check) {
        arr.push(this[i]);
      }
    }
  }
  return arr;
};

const numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
); // Output: [2, 4]

/**
Expected results:


console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */
