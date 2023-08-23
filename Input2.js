function checkDigit(number) {
  const strNumber = number.toString();
  const firstDigit = strNumber[0];
  const lastDigit = strNumber[strNumber.length - 1];
  if (firstDigit === lastDigit) {
    return "YES";
  } else {
    return "NO";
  }
}

// Đọc input từ bàn phím
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout,
}); 
// readline.createInterface là một hàm tạo ra một interface đọc input từ bàn phím
// readline.

const lines = [];

rl.on("line", (line) => { // Khi có input thì chạy hàm này (Enter) 
  lines.push(line);
});

rl.on("close", () => { // Khi đọc hết input thì chạy hàm này (Ctrl + C)
  // Kiểm tra từng số nguyên dương trong input
  for (let i = 0; i < lines.length; i++) {
    const number = parseInt(lines[i]);
    const result = checkDigit(number);
    console.log(result);
  }
});
