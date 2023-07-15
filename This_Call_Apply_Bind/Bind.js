/*
-- bind(): là 1 phương thức của Function, nó sẽ tạo ra 1 hàm mới, có tham số là this và các tham số truyền vào
-- Cú pháp: function.bind(obj, arg1, arg2, ...)
-- bind sẽ trả về 1 hàm mới (và không tự động gọi hàm) phải thêm câu lệnh gọi hàm ở dưới, có tham số là this và các tham số truyền vào
*/

// *** VD dùng bind()
const name = "Hai";
const obj = {
  name: "Dan",
  year: 2002,
  getInfo() {
    console.log(this.name);
    console.log("Nam sinh:", this.year);
  },
};
obj.getInfo(); // Dan Nam sinh: undefined
const Person = obj.getInfo.bind(obj); // this ràng buộc tham chiếu đến obj, nếu không có bind() thì this sẽ tham chiếu đến window name = Hai
Person(); // Dan Nam sinh: 2002

// *** VD trong DOM
const btn = document.querySelector("#button");
// btn.onclick = () => {
//     obj.getInfo(); // Dan Nam sinh: 2002
// }
// hoặc
btn.onclick = obj.getInfo.bind(obj); // Dan Nam sinh: 2002 (ràng buộc this trong hàm getInfo() với obj
// Nếu gán btn.onclick = obj.getInfo thì this sẽ tham chiếu đến window (global object) vì btn.onclick không phải là 1 phương thức của obj

// *** VD dùng biến để không bị lỗi this
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log($(".heading").innerText); // HEADING 1
// Nếu ban đầu không dùng bind() thì this sẽ tham chiếu đến window (global object)
// vì $ là 1 biến mới không phải là 1 phương thức của document, nên sẽ không gọi được phương thức innerText

// *** VD dùng bind() IIFE tạo DOM add Name
const players = (function () {
  const names = [];
  const root = $("#root");
  const input = $("input[name='name']");
  const submit = $("#create");
  const method = {
    add(name) {
      names.push(name);
    },
    remove(index) {
      names.splice(index, 1);
    },
    render() {
      const html = names
        .map((name, index) => {
          return `<li>${name} <span data-index="${index}">X</span></li>`;
        })
        .join("");
      root.innerHTML = html;
    },
    handleDelete(e) {
      // e.target() trả về thẻ HTML mà ta click vào (thẻ con thẻ cha riêng)
      const deleteBtn = e.target.closest("[data-index]"); // closest() tìm chính thẻ đó hoặc thẻ cha gần nhất có thuộc tính data-index
      if (deleteBtn) {
        // Nếu deleteBtn tồn tại
        const index = Number(deleteBtn.dataset.index); // Lấy giá trị của thuộc tính data-index
        this.remove(index); // this ở đây sẽ tham chiếu đến method, do đây là 1 phương thức của method
        this.render();
      }
    },
    start() {
      // Click Creat
      // Chỉ dùng arrow function, để tránh gọi this của submit.onclick, thay vào đó là this của players
      submit.onclick = () => {
        const value = input.value; // Lấy giá trị của input
        if (value) {
          this.add(value); // this ở đây sẽ tham chiếu đến method, do đây là 1 phương thức của method
          this.render(); // this ở đây sẽ tham chiếu đến method, do đây là 1 phương thức của method
          input.value = null; // Xoá giá trị của input
          input.focus(); // Focus vào input
        }
      };
      root.onclick = this.handleDelete.bind(this); // this ở đây sẽ tham chiếu đến method, tránh gọi this của root.onclick
      this.render();
    },
  };
  return method; // Trả về 1 object có các phương thức add, remove, render, handleDelete, start
})();
players.start();
