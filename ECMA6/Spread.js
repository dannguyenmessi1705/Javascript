/*
- Spread: Toán tử dải các giá trị của Array, Object ra (bỏ các dấu đóng ngoặc)
// Sử dụng '...' đặt trước Array hoặc Object
*/

// *** VD Spread Array, nối Array1 vào Array2 và chèn thêm giá trị (Override)
let Array1 = [4, 5, 6];
let Array2 = [1, 2];
let Array = [...Array2, ...Array1];
console.log(Array); // [ 1, 2, 4, 5, 6 ]
// Ngoài ra ta có thể Override cho mảng
let ArrayOverride = [...Array2, 3, ...Array1];
console.log(ArrayOverride); // [ 1, 2, 3, 4, 5, 6 ]

// *** Spread Object, có thể kế thừa, thêm thuộc tính, Override
const obj1 = {
  url: "https://google.com",
  browser: "Chrome",
};
const obj2 = {
  privacy: "TTL/SSL",
  expired: "10 days",
};
// obj sẽ lấy các key của obj1 và obj2, ngoài ra nó có thể override lại thuộc tính
const obj = {
  ...obj1,
  ...obj2,
  url: "https://facebook.com", // Override
};
console.log(obj);
/*
{
  url: 'https://facebook.com',
  browser: 'Chrome',
  privacy: 'TTL/SSL',
  expired: '10 days'
}
*/

// *** Spread kết hợp với Rest trong function
let arr = [1, 2, 3, 4];
const func = (a, ...rests) => {
  rests.forEach((rest) => {
    console.log(rest);
  });
};
func(...arr); // 2 3 4

// VD sử dụng Spread
const ex = () => {
  // Array
  const arr1 = [[1, 2], 3, [4, 5]];
  const arr2 = [6, 7, 8];
  // Nối arr2 vào arr1
  const arr = [...[].concat(...arr1), ...arr2];
  console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
};
ex();
