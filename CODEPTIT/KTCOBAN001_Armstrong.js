const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const main = () => {
  const result = [];
  let count = 1;
  rl.question("", (test) => {
    test = parseInt(test);
    rl.on("line", (input) => {
      count++;
      const power = input.length;
      const sum = input.split("").reduce((sum, e) => {
        return sum + Math.pow(parseInt(e), power);
      }, 0);
      if (sum === parseInt(input)) {
        result.push(1);
      } else {
        result.push(0);
      }
      if (count > test) {
        rl.removeAllListeners("line");
        console.log(result.join("\n"));
        rl.close();
      }
    });
  });
};
main();
