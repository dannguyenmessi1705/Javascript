/*
HTML DOM = Document Object Model
*** Gồm 3 thành phần
+) 1. Element (the tag)
+) 2. Attribute (Thuoc tinh trong cac the (src, title, ...))
+) 3. Text 

-> JS có thể thay đổi tất cả các element trong HTML
-> JS có thể thay đổi tất cả các attribute trong HTML
-> JS có thể thay đổi tất cả CSS style trong HTML
-> JS có thể xoá các element hay attribute đang tồn tại trong HTML
-> JS có thể thêm mới các element hay attribute đang tồn tại trong HTML
-> JS có thể tạo ra các hành động cho tất cả sự kiện đang tồn tại trong HTML
-> JS có thể tạo ra các sự kiện mới cho HTML
*/

// *** Get element method (ID, class, tag) từ CSS selector, HTML collection
// Get ID 
const GetElement = () => {
  const idCollect = document.getElementById("heading");
  console.log(idCollect);
  console.log({
    element: idCollect,
  });
};
GetElement();
// Get Classname -> Trả về một HTML Collection, không phải là array, có thể sử dụng 1 vài phương thức giống Array (spread)
const GetClass = () => {
    const idCollects = document.getElementsByClassName('content')
    console.log(idCollects)
}
GetClass()
// Get Tagname -> Trả về một HTML Collection, có thể sử dụng 1 vài phương thức giống Array (spread)
const GetTag = () => {
    const idCollects = document.getElementsByTagName('p')
    console.log(idCollects)
}
GetTag()
// Get by CSS Selector -> Trả về 1 NodeList, có thể truy cập từng phần tử theo chỉ số(for hoặc forEach()) chứ không có các phương thức giống với Array
const GetCSS = () => {
    // get 1 phần tử xuất hiện lần 2 mà có CSS Selector = "..."
    const idNode1 = document.querySelector('.content .text:nth-child(2)')
    console.log(idNode1)
    // get tất cả các phần tử có CSS selector = "..."
    const idNodes2 = document.querySelectorAll('.content .text')
    console.log(idNodes2)
}
GetCSS()

// Lấy phần tư đầu tiên có ClassName là "box", sau đó lấy tất cả các phần tử có tên là "list" bên tong nó
// Mặc định phần tử document là root của web, nhưng ta có thể truy cập sâu hơn vào từng phần tử bên ttong qua ví dụ này
const NonRoot = () => {
    // Lấy phần tử box đầu tiên
    const Parent = document.getElementsByClassName('box')[0]
    console.log(Parent)
    // Lấy tất ca phần tử list bên trong box
    const Child = Parent.querySelectorAll('.list')
    console.log(Child)
}
NonRoot()