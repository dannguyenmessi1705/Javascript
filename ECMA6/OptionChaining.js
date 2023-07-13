/*
- Option Chaning (?.) -> Là phương pháp kiểm tra xem Object có tồn tại một key nào đó hay không 
*/

// VD in name4, name5 và hàm print(), write()
const obj = {
  name1: {
    name2: {
      name3: {
        name4: "Hoang",
      },
    },
  },
  print(str) {
    return str;
  },
};
// *** VD không dùng (?.), nếu ta được trả về 1 dạng dữ liệu object mà ta không chắc nó có các key bên trong

// name4
if (
  obj.name1 &&
  obj.name1.name2 &&
  obj.name1.name2.name3 &&
  obj.name1.name2.name3.name4
) {
  console.log(obj.name1.name2.name3.name4); // Hoang
} else console.log("Không có name4");
// function print()
if (typeof obj.print === "function") {
  console.log(obj.print("Có function print")); // Có function print
} else console.log("Không có function print");

// *** VD dùng Option Chaining (?.) nếu ta được trả về 1 dạng dữ liệu object mà ta không chắc nó có các key bên trong
// name5
if (obj?.name1?.name2?.name3?.name4?.name5) {
  console.log(obj.name1.name2.name3.name4.name5);
} else console.log("Không có name5"); // Không có name5
// function write()
if (obj?.write) {
  console.log(obj.print("Có function write"));
} else console.log("Không có function write"); // Không có function write
