/*
- IIFE -> Immediately Invoked Funcion Expression (Gọi hàm  ngay lập tức)
- Cách để tạo IIFE: Truyền 1 Expression Function hay Arrow function (không cần tên hàm) vào cặp dấu () (hoặc thêm toán tử ! vào đầu) và theo sau nó là 1 cặp () nữa để hàm được gọi thực thi ngay lập tức
- Để ngăn cách IIFE với các câu lệnh khác, ta phải thêm ";" vào đầu IIFE hoặc vào cuối câu lệnh ở trước
- IIFE là 1 hàm private, khi ta định nghĩa IIFE với 1 tên hàm nào đó, nó chỉ được gọi bên trong đúng blokb IIFE (mục đích dùng đệ quy), ra khỏi khối block đó nó ko còn tồn tại
- Sử dụng IIFE trong trường hợp ta có 1 project quá lớn, tránh trường hợp đặt quá nhiều biến gây ra trùng lặp
-> nên việc đặt tên biến trong khối block IIFE (private) nó sẽ tránh được sự trùng lặp
*/

// *** VD Tạo 1 IIFE

// VD1
const fullName = "Nguyễn Di Đan"
// IIFE
;(function(){
    console.log(fullName)
})() // Nguyễn Di Đan

// VD2
let i = 1
;(function dequy(){
    console.log(i) // 1 2 3 4 5 6 7 8 9
    i++
    if (i<10) {
        dequy() // Nó đang ở bên trong IIFE nên có thể gọi được
    }
})()
// Không thể sử dụng hàm dequy() khi ở bên ngoài block IIFE (private)

// VD3
const b = ((a, b) => {
    return a+b
})(3, 4)
console.log(b) // 7

// *** VD về việc tạo thuộc tính pivate cho object, không muốn người khác truy cập được tới key đó
const players = (function (){
    let name = [] // chỉ được truy cập ở bên trong block IIFE (=> key private)
    return { // Trả về các phương thức mà players có thể truy cập được ở bên ngoài block
        add(str){ 
            name.push(str)
        },
        get(index){
            return name[index]
        },
        remove(index){
            name.splice(index, 1)
        }
    }
}
)()
// players.name // không thể gọi được
players.add("Messi")
players.add("Ronaldo")
players.add("Neymar") 
players.add("Mbappe")
console.log(players.get(1)) // Ronaldo
players.remove(1)
console.log(players.get(1)) // Neymar


// *** VD nâng cao
let val = ((x) => {
    const y = (j) => j*x
    function s(){ 
        return j()
    }
    function j() { 
        return x ** x // 27
    }
    return y(s()) // y(27) = 27*x = 27*3 = 81
})(3) 
console.log("val = ",val) // val =  81