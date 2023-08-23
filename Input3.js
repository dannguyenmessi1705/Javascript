// Đọc input từ bàn phím
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.question("", (test) => {
  // Nhập vào số lượng test
  test = parseInt(test); // Chuyển kiểu dữ liệu sang int
  let count = 1; // Biến đếm số lượng test
  rl.on("line", (input) => {
    // Khi có input thì chạy hàm này (Enter)
    count++; // Tăng biến đếm lên 1
    lines.push(input); // Thêm input vào mảng lines
    if (count > test) {
      // Nếu biến đếm lớn hơn số lượng test thì dừng
      rl.removeAllListeners("line"); // Xóa tất cả các listener
      console.log(lines); // In ra mảng lines
      rl.close(); // Đóng chương trình
    }
  });
});
