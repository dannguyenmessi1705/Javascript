/*
- Hoisting: Là việc biến được định nghĩa sẽ được đẩy lên trên đầu phạm vi code (chỉ phần định nghĩa, còn gán thì không)
- Hoisting hoạt động với các từ khoá var, let, const và Declaration Fuction
*/

// *** var, khi được hoisting, nó chỉ đưa lên đầu phần định nghĩa khai báo biến, nên lúc này biến đưa lên trên đầu không được gán giá trị nào cả => undefined
// còn việc gán giá trị cho nó chỉ được thực hiện khi chạy xong lần lượt các dòng code trước nó
console.log(Name); // undefined
var Name = "Dan";
/* ==
var Name = undefined
console.log(Name)
Name = "Dan"
*/

// *** Declaration Function, vì cả phần hàm + khối code là việc định nghĩa hàm nên nó có thể gọi lên trên ngay khi chương trình thực thi
console.log(sum(2, 3)); // 5
function sum(a, b) {
  return a + b;
}
/* ==
function sum(a, b){
    return a+b
}
console.log(sum(2, 3))
*/

// *** let, const cũng được hoisting, tuy nhiên khi được hoisting thì biến của nó sẽ nằm trong "Temporary Dead Zone" và ta không thể gọi được
console.log(age); // Cannot access 'age' before initialization
let age = 16;


// Vận dụng Ví dụ
var num = 100
;const a = (function (){
    console.log("The money is", sum1()) // NaN
    function sum1(){
        return sum2()
    }
    function sum2(){
        return num*2
    }
    var num = 10
})()

// Vì ta có biến num được khai báo cả bên trong và ngoài block, mà hàm đang thực thi ở bên trong block => ta sẽ lấy biến var num = 10
/* ===
var num = 100
;const a = (function (){
    var num = undefined
        function sum2(){
        return num*2
    }
        function sum1(){
        return sum2()
    }
    console.log("The money is", sum1()) // NaN
    num = 10
})
*/