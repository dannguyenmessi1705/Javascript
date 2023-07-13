/*
Enhanced Object trong ES6 dùng để tối ưu code cho việc định nghĩa, khai báo 1 object
-- (1) Khi key = value, ta tối ưu bằng việc chỉ viết 1 lần (VD)
-- (2) Lược bỏ cú pháp khai báp phương thức (giống với Classes)
-- (3) Định nghĩa key cho object dưới dạng biến
*/

// VD
const name = "Messi";
const age = 36;
// (3)
const fielNation = "nation";
const fieldLanguague = "language";

const Obj = {
  // (1)
  name,
  age,
  // (3)
  [fielNation]: "Argentina", // (= nation: "Argentina")
  [fieldLanguague]: "Espana", // (= language: "Espana")
  // (2)
  getName() {
    return this.name;
  },
};
console.log(Obj);
/*
{
  name: 'Messi',
  age: 36,
  nation: 'Argentina',
  language: 'Espana',
  getName: [Function: getName]
}
*/
