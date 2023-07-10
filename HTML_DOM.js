/*
HTML DOM = Document Object Model
*** Gồm 3 thành phần
+) 1. Element Node (thẻ tag) : nodetype = 1
+) 2. Attribute (Thuộc tính trong các thẻ (src, title, id, class...)) : nodetype = 2
+) 3. Text Node (nằm Ở giữa thẻ mở đóng tag) : nodetype = 3

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
  const Text = document.getElementsByClassName("textNode")[0];
  console.log(Text.innerText);
  // Sửa Text (Lưu ý mặc dù chỉ in ra những gì ta thấy ở web tuy nhiên khi sửa nó sẽ sửa hết cả giá trị ẩn trong DOM)
  // Text.innerText =
  // `<i>
  // Text
  // </i>`
};
Inner();
// textContent -> Trả về textNode (Khác với innerText, textContent cứ ở bên trong thẻ tag thì in ra hết)
const TextContent = () => {
  const Text = document.querySelector(".textNode");
  console.log(Text.textContent);
  // Sửa Text (Lưu ý mặc dù chỉ in ra những gì ta thấy ở web tuy nhiên khi sửa nó sẽ sửa hết cả giá trị ẩn trong DOM)
  // Text.textContent = '<i>Text</i>'
};
TextContent();

// *** Thêm element (thẻ tag), Attribute, Textnode, vào 1 element: Dùng innerHTML, outterHTML
// innerHTML -> thêm các giấ trị vào trong element được gọi tới (trong thẻ tag)
const InnerHTML = () => {
  const Element = document.querySelector(".inner");
  // Thêm 1 thẻ + attribute + textNode
  Element.innerHTML = `<h1 class="msg">Đây là dòng thêm bởi innerHTML</h1>`;
  console.log(Element.innerHTML);
};
InnerHTML();
// outterHMTL -> thêm các giá trị (chèn) vào đúng element được gọi tới (thay thế luôn cả thẻ tag)
const OutterHTML = () => {
  const Element = document.querySelector(".inner");
  Element.outerHTML = `<div style="color: red">Đây là dòng thêm bởi outterHTML</div>`;
  // Mặc dù nó sẽ thay thế toàn bộ element được gọi tới, tuy nhiên gía trị trả về nó vẫn còn dữ liệu cũ của tk inner vừa gọi ở trên
  // Nó chỉ làm thay đổi trong DOM
  console.log(Element.outerHTML);
};
OutterHTML();

// VD: Thêm 1 array course vào thẻ ul trong HTML
const courses = ["Java", "Python", "C++"];
const ex = (courses) => {
  const Element = document.querySelector(".course");
  let list = courses.map((course) => {
    let arr = `<li>${course}</div>`;
    return arr;
  });
  list = list.join("\n");
  Element.innerHTML = list;
  console.log(list);
};
ex(courses);

// *** DOM style, sử dụng thuộc tính 'style' trỏ đến các thuộc tính trong CSS để chỉnh element (inline block)
// các thuộc tính được trỏ đến tuân theo kiểu camel Case
const DomStyle = () => {
  const Element = document.querySelector(".rectangle");
  // Trường hopej thêm 1 style
  Element.style.backgroundColor = "red";
  // Trường hợp thêm nhiều style
  let styles = {
    width: "500px",
    height: "30px",
  };
  Object.assign(Element.style, styles);
  console.log(Element);
};
DomStyle();

// *** Classlist -> Làm việc với thuộc tính class của element trong HTML.Nó có các thuộc tính sau
// length -> trả về số lượng phần tử trong class. VD class = "my me" => 2, và nó làm việc gần giống với Array
// value ->  Trả về giá trị cua class dưới dạng string
// add(str, ...) -> Thêm 1 chuỗi str vào class
// remove(str, ...) -> Xoá 1 chuỗi ra khỏi class
// replace(old, new) -> Thay thế chuỗi old bằng new trong class
// contains(str, ..) -> Kiểm tra xem có chuỗi str trong class hay không
// tongle(str, ...) -> Hoạt động như 1 công tắc, nó check xem trong class có str ko, nếu có -> nó sẽ remove chuỗi str đi, ngược lại nếu ko có -> nó sẽ add str vào
const ClassList = () => {
  const Element = document.getElementById('classlist')
  // Tìm độ dài và in ra từng giá trị của class
  console.log("length class", Element.classList.length)
  for(let i=0; i<Element.classList.length; i++){
    console.log(`Giá trị ${i+1}:`, Element.classList[i])
  }
  // In ra chuỗi giá trị
  console.log("class có chuỗi ban đầu là:", Element.classList.value)

  // Thêm chuỗi ita đã được css vào trong class, ngoài ra có thêm 1 lúc nhiều str
  Element.classList.add('ita', 'optional')

  // Kiểm tra có chuỗi trong class hay không
  console.log(Element.classList.contains("optional"))

  // Xoá chuỗi trong class
  Element.classList.remove('optional', 'head0')

  // Tự động thêm xoá chuỗi trong class bằng toggle
  setInterval(() => {
    Element.classList.toggle('head2')
  }, 1000)
}
ClassList()

// VD: Chuyển hết thẻ li về màu blue
const Blue = () =>{
  const Element = document.querySelectorAll('li')
  Element.forEach((e) => {
    e.classList.add('blue')
  })
}
Blue()