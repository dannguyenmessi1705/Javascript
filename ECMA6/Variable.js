/*
Ngoài từ khoá khai báo biến var (trong ES5) thì trong ES6 ta có thêm 2 từ khoá let và const
*/
// *** var -> biến khai báo là biến global, trong khi let, const (hằng, không thể gán lại giá trị khác) là biến local
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

// *** var -> Hỗ trợ hoisting (biến được định nghĩa sẽ được gọi ngược lên(tuy nhiên chưa được gán giá trị)
// trước khi biên dịch), let vs const thì không
const ex2 = () => {
  console.log(a);
  var a = 2;
  // == var a;
  //    console.log(a)
  //    a = 2
};
ex2(); // Không lỗi nhưng undefined (do nó chỉ gọi ngược lại cú pháp khai báo biến, chứ việc gán giá trị không liên quan đến hoisting)
