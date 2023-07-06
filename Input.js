const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your number testcase ", (answer) => {
  let n = parseInt(answer); // Chuyen ve kieu du lieu so
  for (let i = 0; i < n; i++) {
    rl.on("line", (input) => {
      const [a, b] = input.split(" ").map(Number);
      console.log(a + b);
    });
  }
  rl.close();
});

// rl.on("line", (input) => {
//   const [a, b] = input.split(" ").map(Number);
//   console.log(a + b);
// });
