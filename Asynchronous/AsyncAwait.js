/*
-- Async, Await: là 2 từ khóa dùng để khai báo 1 hàm bất đồng bộ
-- Async: là 1 từ khóa dùng để khai báo 1 hàm bất đồng bộ
-- Await: là 1 từ khóa dùng để đợi kết quả trả về của 1 Promise (Promise, Fetch, Axios, ...) ở bên trong hàm Async, dùng để tạm dừng việc thực thi của hàm Async cho tới khi Promise trả về kết quả
-- Async và Await thường được sử dụng cùng nhau
Bản thân Async là 1 promise, nên ngoài việc xử lý bắt lỗi then(), catch() như promise, ta còn có thể dùng try catch để bắt lỗi
*/

// *** VD về Async, Await
const getVal = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });
};
const print = async () => {
  const val2 = await getVal(); // await sẽ đợi getVal() trả về kết quả rồi mới gán cho val2
  return val2 + 10; // 10 + 10
};
print().then((value) => console.log(value)); // 20, vì print() là 1 promise nên ta có thể dùng then() để lấy kết quả trả về

// *** Điểm giống giữa Async và Promise
// Promise
const promise = () => {
  return new Promise((resolve, reject) => {
    resolve("Promise");
  });
};
promise().then((value) => console.log(value)); // Promise

// Async
const Async = async () => {
  return "Async";
};
Async().then((value) => console.log(value)); // Async

// *** VD dùng Async, Await để lấy dữ liệu từ API, sử dụng try catch để bắt lỗi
const getPost = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // await sẽ đợi fetch() trả về kết quả rồi mới gán cho res
    const data = await res.json(); // await sẽ đợi res.json() trả về kết quả rồi mới gán cho data
    // Do fetch phải trả về 2 lân (1 lần là res, 1 lần là res.json()) nên ta phải dùng 2 lần await
    // Dùng axios chỉ cần dùng 1 lần await, đặc biệt khi muốn post dữ liệu lên server, axios sẽ dễ dàng hơn fetch vì axios không cần phai stringify dữ liệu
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
getPost()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// In ra 2 lần vì ta VỪA trả về dữ liệu xong gọi bằng then(), catch() của promise VỪA console.log(data), console.log(error) trong try catch
// (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
// (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
