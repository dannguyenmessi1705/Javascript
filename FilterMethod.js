// Tu dinh nghia 1 phuong thuc co chuc nang giong voi filter()
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiem tra xem chi so index i co nam trong chi so mang ban dau ko, vi khi dinh nghia them 1 phuong thuc, ta se co them chi moi va no co gia tri dung bang phuong thuc moi tao
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
