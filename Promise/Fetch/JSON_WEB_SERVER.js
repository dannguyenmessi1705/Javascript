/* JSON WEB SERVER theo chuẩn REST API (CRUD)
 C: Creat - Tạo thêm 1 giá trị --- POST
 R: Read - Đọc dữ liệu từ API --- GET
 U: Update - Cập nhật dữ liệu --- PUT/PATCH
 D: Delete - Xoá dữ liệu --- DELETE
 cài json-server trên github
*/
// Đọc dữ liệu
const JSON_WEB = () => {
  // Sau khi chạy local host ta được các API
  const URLuser = "http://localhost:3000/users";
  const URLcmt = "http://localhost:3000/comments";
  // Lấy ra user
  fetch(URLuser)
    .then((response) => response.json())
    .then((data) => console.log("users:", data));
  // Lấy comments ra
  fetch(URLcmt)
    .then((response) => response.json())
    .then((data) => {
      console.log("comments:", data);
    });
};
JSON_WEB();

// Để thêm, sửa, xoá dữ liệu ta dùng POSTMAN truyền URL/id
// Hoặc ta cài extensions REST Client về rồi tạo file .rest