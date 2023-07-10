/*
HTML DOM = Document Object Model
*** Gồm 3 thành phần
+) 1. Element (thẻ tag)
+) 2. Attribute (Thuộc tính trong các thẻ (src, title, id, class...))
+) 3. Text (nằm Ở giữa thẻ mở đóng tag)

-> JS có thể thay đổi tất cả các element trong HTML
-> JS có thể thay đổi tất cả các attribute trong HTML
-> JS có thể thay đổi tất cả CSS style trong HTML
-> JS có thể xoá các element hay attribute đang tồn tại trong HTML
-> JS có thể thêm mới các element hay attribute đang tồn tại trong HTML
-> JS có thể tạo ra các hành động cho tất cả sự kiện đang tồn tại trong HTML
-> JS có thể tạo ra các sự kiện mới cho HTML
*/

/* NOTE: Khi dùng để chỉnh sửa 1 phần tử thì Element trả về là 1 phần tử, không phải 1 mảng HTML Collection hay NodeList, mà phải lấy chỉ số ra
VD: các phương thức getElementsByClassName, getElementsByTagName, querySelectorAll mang số nhiều, trả về 1 mảng nên cần phải truy cập vào phần tử cụ thể
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
  const idCollects = document.getElementsByClassName("content");
  console.log(idCollects);
};
GetClass();
// Get Tagname -> Trả về một HTML Collection, có thể sử dụng 1 vài phương thức giống Array (spread)
const GetTag = () => {
  const idCollects = document.getElementsByTagName("p");
  console.log(idCollects);
};
GetTag();
// Get by CSS Selector -> Trả về 1 NodeList, có thể truy cập từng phần tử theo chỉ số(for hoặc forEach()) chứ không có các phương thức giống với Array
const GetCSS = () => {
  // get 1 phần tử xuất hiện lần 2 mà có CSS Selector = "..."
  const idNode1 = document.querySelector(".content .text:nth-child(2)");
  console.log(idNode1);
  // get tất cả các phần tử có CSS selector = "..."
  const idNodes2 = document.querySelectorAll(".content .text");
  console.log(idNodes2);
};
GetCSS();

// Lấy phần tư đầu tiên có ClassName là "box", sau đó lấy tất cả các phần tử có tên là "list" bên tong nó
// Mặc định phần tử document là root của web, nhưng ta có thể truy cập sâu hơn vào từng phần tử bên ttong qua ví dụ này
const NonRoot = () => {
  // Lấy phần tử box đầu tiên
  const Parent = document.getElementsByClassName("box")[0];
  console.log(Parent);
  // Lấy tất ca phần tử list bên trong box
  const Child = Parent.querySelectorAll(".list");
  console.log(Child);
};
NonRoot();

// *** Thêm sửa, lấy giá trị thuộc tính (attribute) của element
const ModAttribute = () => {
  const Element = document.getElementById("heading");
  // Cách 1: Thêm, sửa, lấy giá trị bằng việc trỏ element tới đúng attribute cần thêm sửa, lấy giá trị (attribute phải hợp lệ)
  Element.id = "head"; // Nếu attribute đã tồn tại trong DOM, thì câu lệnh này sẽ làm thay đổi giá trị của nó => id = "head"
  Element.className = "heading"; // Nếu attribute chưa tồn tại, thì câu lệnh này sẽ thêm 1 attribute cho element => class = "heading"
  console.log(Element.id, Element.className);

  // Cách 2: Tự đặt ra attribute, không cần phải hợp lệ, sử dụng cho cả cách 1, dùng phương thức getAttribute(attribute, value)->lấy giá trị, setAttribute(attribute, value)-> Thêm, sửa giá trị
  // Phương thức getAttribute() và setAttribute() chỉ dùng khi Element trả về là 1 phần tử, không phải 1 mảng HTML Collection hay NodeList, mà phải lấy chỉ số ra
  const Element2 = document.getElementsByClassName("content")[0];
  Element.setAttribute("title", "DOM");
  Element.setAttribute("dannguyen", "javascript");
  console.log(Element.getAttribute("title"), Element.getAttribute("dannguyen"));
};
ModAttribute();

// *** Get, sửa giá trị của Text Node trong DOM (lưu ý sửa bằng cách thêm tag vào thì nó vẫn in ra cả thẻ tag)

// innerText -> Trả về text (nhìn thấy gì trên web thì trả về đúng như vậy)
const Inner = () => {
  const Text = document.getElementsByClassName("textNode")[0]
  console.log(Text.innerText)
  // Sửa Text (Lưu ý mặc dù chỉ in ra những gì ta thấy ở web tuy nhiên khi sửa nó sẽ sửa hết cả giá trị ẩn trong DOM)
  // Text.innerText = 
  // `<i>
  // Text
  // </i>`
}
Inner()
// textContent -> Trả về textNode (Khác với innerText, textContent cứ ở bên trong thẻ tag thì in ra hết)
const TextContent = () => {
  const Text = document.querySelector('.textNode')
  console.log(Text.textContent)
  // Sửa Text (Lưu ý mặc dù chỉ in ra những gì ta thấy ở web tuy nhiên khi sửa nó sẽ sửa hết cả giá trị ẩn trong DOM)
  // Text.textContent = '<i>Text</i>'
}
TextContent()