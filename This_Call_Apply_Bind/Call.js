/*
-- function.call(this, value1, value2,...): là 1 phương thức dùng để gọi hàm, và thay đổi giá trị của this
-- Bind: gọi ra 1 hàm mới, this tham chiếu đến đối tượng và sẽ không được gọi hàm, chi gọi khi có thêm 1 cấu lệnh gọi hàm
!= Call: không tạo ra hàm mới (mà gọi ngay hàm được bind đến this) Call = (bind + call)
-- Call có thể mượn hàm của 1 đối tượng khác, và tham chiếu this của hàm đó đến đối tượng mà ta muốn
-- Call có thể dùng để kế thừa hàm của 1 đối tượng khác
*/
const you = {
  firstName: "Hai",
  lastName: "Nguyễn",
};

const me = {
  firstName: "Đan",
  lastName: "Nguyễn",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
me.showFullName.call(); // Trong trường hợp không truyền tham số thì this sẽ tham chiếu đến window (global object)
me.showFullName.call(me); // Đan Nguyễn
me.showFullName.call(you); // Hai Nguyễn, Call được bind đến you nên this sẽ tham chiếu đến you (hàm vẫn dùng của me)

// *** VD về tính kế thừa của Call
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
const Student = function (name1, age1, className) {
  Person.call(this, name1, age1); // this ở đây là Student (nó gọi tới hàm của Person), nên this.name = name1, this.age = age1
  this.className = className;
};
const student = new Student("Hai", 19, "FE68");
console.log(student); // Student {name: "Hai", age: 19, className: "FE68"}
