/*
Ngoài từ khoá khai báo biến var (trong ES5) thì trong ES6 ta có thêm 2 từ khoá let và const
*/
// *** var -> biến khai báo là biến global (kể cả khi khia báo trong 1 block code, nó sẽ tự chui ra ngoài làm biến global),
// trong khi let, const (hằng, không thể gán lại giá trị khác) là biến local, nó chỉ tốn tại bên trong block code
// Nếu cả bên trong block và ngoài đều có biến trùng tên, thì var, let, const nó sẽ lấy biến ở trong block gần nó nhất
const ex1 = () => {
  {
    var a = 1;
  }
  console.log(a); // 1
  {
    let b = 1;
    const c = 0;
  }
  console.log(b, c); // error
};

// *** var -> Hỗ trợ hoisting (biến được định nghĩa sẽ được gọi ngược lên(tuy nhiên nó được gán giá trị == undefined trước khi biên dịch),
// let vs const thì cũng được hoisting, tuy nhiên nó không được gán giá trị nào cả mà thuộc "Temporary Dead Zone", khi gọi tới sẽ lỗi
const ex2 = () => {
  console.log(a);
  var a = 2;
  // == var a;
  //    console.log(a)
  //    a = 2
};
ex2(); // Không lỗi nhưng undefined (do nó chỉ gọi ngược lại cú pháp khai báo biến, chứ việc gán giá trị không liên quan đến hoisting)
