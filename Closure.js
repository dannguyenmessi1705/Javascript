/*
- Closure: Là 1 hàm có thể ghi nhớ nơi nó được tạo ra và có thể truy cập các biến ở bên ngoài phạm vi của nó
- Thể hiện tính Private
*/
// *** VD
// Khi viết function, các biến chỉ được định nghĩa, chỉ khi nào thực thi thì nó mới có phạm vi
function creat() {
  let count = 0;
  // Closure
  function increase() {
    return ++count;
  }
  return increase; // Trả về hàm closure, mỗi khi được gọi ở ngoài, nó sẽ nhớ nơi tạo ra nó để chui vào trong
  // Biến count mà function increase có thể truy cập tham chiếu tới ở bên ngoài
}
// Định nghĩa
const in1 = creat(); // Lúc này function creat nó sẽ được gán cho in1
// Khi bắt đầu chạy ic1(), nó sẽ tạo ra 1 phạm vi block code của hàm, các biến sẽ được tạo ra và lưu vào bộ nhớ (bên trong in1)
// count = 0
console.log(in1()); // ( in1() gọi hàm con increase == creat()() ) Tuy nhiên nếu dùng creat()() thì các biến tạo ra sẽ bị reset sau mỗi làn gọi, vì nó không được lưu vào biến nào cả
// Thực thi code bên trong hàm và trả về 1 hàm increase, hàm increase tiếp tục trả về ++count
// count = 1
console.log(in1()); // ( in1() gọi hàm con increase == creat()() ) Tuy nhiên nếu dùng creat()() thì các biến tạo ra sẽ bị reset sau mỗi làn gọi, vì nó không được lưu vào biến nào cả
// Khi tiếp tục gọi, vì vẫn là biến function đó nên nó sẽ tiếp tục truy cập vào phạm vi cũ đã có trước đó
// count = 2
const in2 = creat(); // Khi tạo ra 1 biến mới lưu function creat, thì nó sẽ tạo ra 1 phạm vi block code mới của riêng biến đó, các biến sẽ được tạo ra và lưu vào bộ nhớ (bên trong in2)
console.log(in2()); // ( in2() gọi hàm con increase == creat()() ) Tuy nhiên nếu dùng creat()() thì các biến tạo ra sẽ bị reset sau mỗi làn gọi, vì nó không được lưu vào biến nào cả
// count = 1

// *** Ứng dụng Closure để làm với localStorage (thê hiện tính Private)
function createLocalStorage(key) {
  // Tạo biến storage lấy 1 object từ bên trong localStorage, nếu localStorage rỗng thì nó sẽ trả về 1 object rỗng {}
  // Vì giá trị ở bên localStorage thuộc kiểu JSON, nên ta phải chuyển về kiểu JS thuần
  const storage = JSON.parse(localStorage.getItem(key)) ?? {};
  // Tạo hàm để lưu lại biến thêm vào localStorage
  // Vì bên localStorage chỉ nhận kiểu JSON nên ta phải chuyển kiểu JS sang JSON
  const save = () => {
    localStorage.setItem(key, JSON.stringify(storage));
  };
  // CLOSURE trả về object các hàm
  const func = {
    // Thêm 1 giá trị vào trong localStorage
    set(key, value) {
      storage[key] = value;
      save();
    },
    // Lấy 1 giá trị từ localStorage
    get(key) {
      return storage[key];
    },
    // Xoá 1 key trong localStorage
    remove(key) {
      delete storage[key];
      save();
    },
  };
  // Trả về các hàm qua object
  return func;
}
const LOCAL = createLocalStorage("account"); // Hàm được khai báo, tạo ra 1 phạm vi
LOCAL.set("name", "Dan");
LOCAL.set("age", "22");
LOCAL.set("id", "17052002");
// Tạo 3 giá trị trong localStorage, các giá trị này chỉ mất khi reload trang hoặc dùng hàm remove
/*
{name: "Dan", age: "22", id: "17052002"}
*/
console.log(LOCAL.get("name")); // Dan
console.log(LOCAL.get("age")); // 22
console.log(LOCAL.get("id")); // 17052002

LOCAL.remove("id"); // Xoá key id trong localStorage
console.log(LOCAL.get("id")); // undefined

// *** VD về tính Private trong OBJ (Giống IIFE)
function cars() {
  const name = []; // Không thể truy cập key này từ bên ngoài, chỉ có func mới gọi được, nhưng ta chỉ tạo các hàm để thực hiện nó
  // CLOSURE
  const func = {
    add(str) {
      name.push(str);
    },
    show() {
      return name;
    },
  };
  return func; // Return các hàm bên trong obj funct
}
const car1 = cars(); // Tạo ra 1 phạm vi biến lưu trong car1
car1.add("Toyota"); // biến name lưu trong car1 = ["Toyota"]
car1.add("Honda"); // lúc này vẫn thuộc phạm vi biến trong car1 nên nó tiếp tục push vào name = [ "Toyota", "Honda" ]
console.log(car1.show()); // [ "Toyota", "Honda"]
