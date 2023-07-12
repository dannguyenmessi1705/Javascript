/* JSON WEB SERVER theo chuẩn REST API (CRUD)
 C: Creat - Tạo thêm 1 giá trị --- POST
 R: Read - Đọc dữ liệu từ API --- GET
 U: Update - Cập nhật dữ liệu --- PUT/PATCH
 D: Delete - Xoá dữ liệu --- DELETE
 cài json-server trên github, tạo file db.json và npm start trước khi thao tác code
*/

// Sau khi chạy local host ta được các API
const URL = "http://localhost:3000/post";

// *** READ POST
const getPost = (callback) => {
  fetch(URL)
    .then((resonse) => resonse.json())
    .then(callback); // trả về 1 hàm chứa dữ liệu từ server để sau này xử lý
};
// *** CREATE POST
const createPost = (data, callback) => {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Truyền dữ liệu JSON cho web
  };
  fetch(URL, option)
    .then((response) => response.json()) // Trả về 1 promise
    .then(callback); // Trả về hàm có chữa dữ liệu vừa được thêm để sau này xử lý
};

// Hàm xử lý bắt sự kiện nút Submit để lấy dữ liệu cả thẻ Input Page và Input Content và thêm 1 dữ liệu mới
const handleSubmit = () => {
  const Submit = document.getElementById("submit");
  Submit.onclick = () => {
    const page = document.querySelector('input[name="page"]').value; // Lấy dữ liệu từ thẻ input Page
    const content = document.querySelector('input[name="content"]').value; // Lấy dữ liệu từ thẻ input Content
    const data = {
      page: page,
      content: content,
    }; // Trả về dạng object có các key như giá trị ban đầu vừa GET
    createPost(data, Render); // Tạo dữ liệu mới và render ra giá trị vừa nhận
  };
};

// *** DELETE POST
const handleDelete = (id) => {
  let option = {
    method: "DELETE",
  };
  fetch(URL + "/" + id, option)
    .then((response) => response.json()) // Trả về 1 promise
    .then(() => {
      const PostId = document.querySelector(`#post-id-${id}`);
      if (PostId) {
        // Nếu tìm được, thì xoá DOM
        PostId.remove();
      }
    }); // Trả về hàm thực hiện chức năng, ta định nghĩa cho nó thành xoá
};

// *** UPDATE POST
const updatePost = (id, data, callback) => {
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Truyền dữ liệu JSON cho web
  };
  fetch(URL + "/" + id, option)
    .then((response) => response.json()) // Trả về 1 promise
    .then(callback); // Trả về hàm có chữa dữ liệu vừa được thêm để sau này xử lý
};
// Hàm xử lý khi ấn nút Edit, các giá trị nó sẽ nhảy vào ô input ở dưới, và chỉ cần Submit là cập nhật thành công
const handleUpdate = (id) => {
  // Lấy giá trị của thẻ chứa tên page
  const copPage = document.getElementById(`page-${id}`).innerText;
  // Lấy giá trị của thẻ chứa nội dung content
  const copContent = document.getElementById(`content-${id}`).innerText;
  // Cho thẻ input Page và Content = với 2 giá trị vừa get
  document.querySelector('input[name="page"]').value = copPage;
  document.querySelector('input[name="content"]').value = copContent;
  // Bắt sự kiện nút Submit để cập nhật
  const Submit = document.getElementById("submit");
  Submit.onclick = () => {
    const page = document.querySelector('input[name="page"]').value; // Lấy dữ liệu từ thẻ input Page
    const content = document.querySelector('input[name="content"]').value; // Lấy dữ liệu từ thẻ input Content
    const data = {
      page: page,
      content: content,
    }; // Trả về dạng object có các key như giá trị ban đầu vừa GET
    updatePost(id, data, Render);
  };
};

// Render dữ liệu ra HTML, posts -> Là dữ liệu được lấy từ API
// posts này lấy từ .then(posts => console.log(posts)) của fetch => Render chính là hàm trả về posts
const Render = (posts) => {
  const Element = document.getElementById("post");
  let html = "";
  posts.forEach((post) => {
    html += `
    <div id="post-id-${post.id}">
      <h2 id="page-${post.id}">${post.page}</h2>
      <p id="content-${post.id}">${post.content}</p>
      <div stlye="display:inline-block">
        <button id="Delete" onclick="handleDelete(${post.id})">Delete</button>
        <button id="Edit" onclick="handleUpdate(${post.id})">Edit</button>
      </div>
    </div>
    `;
  });
  Element.innerHTML = html;
};
const start = () => {
  getPost(Render);
  // == getPost((post) => {
  //      Render(post);
  //    });
  handleSubmit();
};
start();

// Có thể thêm, sửa, xoá dữ liệu ta dùng POSTMAN truyền URL/id
// Hoặc ta cài extensions REST Client về rồi tạo file .rest
