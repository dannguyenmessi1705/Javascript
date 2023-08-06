const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your number testcase ", (test) => {
  let n = parseInt(test); // Chuyen ve kieu du lieu so
  let result = [];
  const exec = (curTest) => {
    if (curTest <= test) {
      rl.question("", (input) => {
        const [a, b] = input.split(" ").map(Number);
        result.push(a + b);
        exec(curTest + 1);
      });
    } else {
      result.forEach((r) => {
        console.log(r);
      });
      rl.close();
    }
  };
  exec(1);
});

// rl.on("line", (input) => {
//   const [a, b] = input.split(" ").map(Number);
//   console.log(a + b);
// });
