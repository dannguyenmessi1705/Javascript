/*
JSON (Javascript Object Notation) - là 1 định dạng dữ liệu kiểu chuỗi
các giá tị biến của nó đều đặt vào trong 2 dấu ' '. 
! Lưu ý: Các kiểu dữ liệu bên trong nếu liên quan tới chuỗi đều phải dùng " " đặc biệt khi dữ liệu là object, ta phải đưa key vào giữa 2 dấu " "
! Lưu ý: Việc khai báo dữ liệu cho biến JSON không có khái niệm xuống dòng, tất cả phải đặt cùng 1 dòng
JSON có các kiểu dữ liệu: Number, String, Null, Boolean, Array (Object), Object nhưng không có function
stringify() -> Phương thức chyển JS thuần sang JSON
parse() -> Phương thức chuyển JSON sang JS thuần

--- Thông thường JSON là một chuỗi được trả về từ phía Backend (server) và bên phía Frontend (client) phải xử lý chuỗi dữ liệu này
*/

let num = '17' // Khai báo biến JSON dạng Number
let str = ' "Dan Nguyen" ' // Khai báo biến JSON dạng String
let nul = 'null' // Khai báo biến JSON dạng Null
let bool ='true' // Khai báo biến JSON dạng Boolean
let arr = '["BMW", "Honda", "Mercedes"]' // Khai báo biến JSON dạng Array
let obj = '{"name": "Lionel Messi", "age": 37}' // Khai báo biến JSON dạng Object

// parse() -> Chuyển kiểu dữ JSON về JS thuần
console.log('Giá trị:', JSON.parse(num), "\nKiểu dữ liệu:", typeof JSON.parse(num))
console.log('Giá trị:', JSON.parse(str), "\nKiểu dữ liệu:", typeof JSON.parse(str))
console.log('Giá trị:', JSON.parse(nul), "\nKiểu dữ liệu:", typeof JSON.parse(nul))
console.log('Giá trị:', JSON.parse(bool), "\nKiểu dữ liệu:", typeof JSON.parse(bool))
console.log('Giá trị:', JSON.parse(arr), "\nKiểu dữ liệu:", typeof JSON.parse(arr))
console.log('Giá trị:', JSON.parse(obj), "\nKiểu dữ liệu:", typeof JSON.parse(obj))

let jsArray = ["A", "B", "C", "D"]
// stingify() -> chuyển kiểu dữ liệu JS sang JSON (JSON chỉ có 1 kiểu dữ liệu String)
console.log('Giá trị:', JSON.stringify(jsArray), "\nKiểu dữ liệu:", typeof JSON.stringify(jsArray))