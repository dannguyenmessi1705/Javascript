function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (n) => {
    let arr = n.split(" ");
    let [a, b] = arr;
    const square = a ** 2;
    const circle = 3.14 * b ** 2;
    console.log(square >= circle ? "SQUARE" : "CIRCLE");
    rl.close();
  });
}
main();
