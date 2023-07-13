/*
- Tag Template kết hợp với Template String để bóc tách từng phần tử của 1 chuỗi ra
*/
// VD: Ta muốn highglight chữ "Messi", "vô địch" trong chuỗi "Không nghi ngờ gì nữa, Messi là nhà vô địch World Cup 2022"
// => Phải đưa "Messi", "vô địch" thành 1 biến nội suy và đưa vào thẻ tag css highlight
const name = "Messi";
const act = "vô địch";
// str = "Không nghi ngờ gì nữa, Messi là nhà vô địch World Cup 2022"
// Tạo hàm highlight, ta lấy mảng tách lấy chuỗi đầu đến gần "Messi", first = "Không nghi ngờ gì nữa, ",
// ...strings là các chuỗi còn lại ngoại trừ 2 biến nội suy "Messi", "vô địch"
// ...values là các biến nội suy truyền vào
// Dùng Destructuring
const highlight = ([first, ...strings], ...values) => {
  console.log(first); // "Không nghi ngờ gì nữa, "
  console.log(strings); // [ ' là nhà ', ' World Cup 2022' ]
  console.log(values); // [ 'Messi', 'vô địch' ]
  // Tạo hàm cho việc xử lý reduce
  const func = (acc, curr) => {
    return [acc, `<span style="color: red;">${curr}</span>`, strings.shift()];
  };
  // Thực hiện nối chuỗi từ mảng values
  return values.reduce(func, [first]).join("");
};
// gọi hàm highlight ta thay () bằng ``, lúc này các biến nội suy sẽ tách riêng ra thành 1 mảng, 1 mảng còn lại chứa các chuỗi còn lại
const output = highlight`Không nghi ngờ gì nữa, ${name} là nhà ${act} World Cup 2022`;
console.log(output);
// Không nghi ngờ gì nữa, <span style="color: red;">Messi</span> là nhà <span style="color: red;">vô địch</span> World Cup 2022
