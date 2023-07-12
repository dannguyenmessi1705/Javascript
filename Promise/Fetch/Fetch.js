// *** fecth(URL API) -> Dùng để lấy dữ liệu từ API trả về
// fetch là hàm hoạt động như Promise (bất đồng bộ), nó sẽ trả về 1 object dưới dạng JSON
// Để trả về kiểu Javascript ta gọi phương thức json() (response.json() = JSON.parse(data)), nó sẽ trả về 1 promise và tiếp tục trả về 1 hàm có chứa dữ liệu để ta xử lý dữ liệu đó
// URL API lấy ví dụ từ trang web jsonplaceholder "https://jsonplaceholder.typicode.com/posts"

// *** GET METHOD
const FetchGet = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  fetch(URL)
    .then((response) => {
      // Trả về 1 promise
      return response.json();
    })
    .then((json) => {
      // Hàm trả về kiểu JS
      return console.log(json);
    });
};
FetchGet();

// *** POST METHOD
const FetchPost = () => {
  fetch(URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((response) => response.json()) // Trả về 1 promise
    .then((data) => console.log(data)); // Hàm trả về kiểu JS giá trị vừa thêm
};
