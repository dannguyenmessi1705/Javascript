// *** fecth(URL API) -> Dùng để lấy dữ liệu từ API trả về
// fetch là hàm hoạt động như Promise, nó sẽ trả về 1 object dưới dạng JSON
// Để trả về kiểu Javascript ta gọi phương thức json() cho nó, nó sẽ tiếp tục trả về 1 promise khác có chứa dữ liệu cần GET
// URL API lấy ví dụ từ trang web jsonplaceholder "https://jsonplaceholder.typicode.com/posts"
const FETCH = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return console.log(json);
    });
};
FETCH();
