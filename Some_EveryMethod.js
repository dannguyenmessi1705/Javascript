// Tạo ham mySome co chuc nang giong y nhu ham some()
Array.prototype.mySome = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiem tra xem chi so index i co nam trong chi so mang ban dau ko, vi khi dinh nghia them 1 phuong thuc, ta se co them chi moi va no co gia tri dung bang phuong thuc moi tao
      let check = callback(this[i], i, this);
      if (check) return true;
    }
  }
  return false;
};
let arr = [1, 3, 5, 7];
// Kiem tra co phan tu nao trong mang la so chan hay khong
console.log(
  arr.mySome((element, index, arr) => {
    return element % 2 === 0;
  })
); // false

// Tao ham myEvery co chuc nang giong y nhu ham every()
Array.prototype.myEvery = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      // Kiem tra xem chi so index i co nam trong chi so mang ban dau ko, vi khi dinh nghia them 1 phuong thuc, ta se co them chi moi va no co gia tri dung bang phuong thuc moi tao
      let check = callback(this[i], i, this);
      if (!check) return false;
    }
  }
  return true;
};
// Kiem tra tat ca gia tri trong mang co phai so le hay khong
console.log(
  arr.myEvery((element, index, arr) => {
    return element % 2 === 1;
  })
); // true
