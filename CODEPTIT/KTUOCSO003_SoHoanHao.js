const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const main = () => {
  const result = [];
  let count = 1;
  rl.question("", (test) => {
    rl.on("line", (input) => {
      count++;
      const arr = [];
      const num = parseInt(input);
      if (num === 1) {
        result.push(0);
      }
      else {
          for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
              if (i !== num / i) {
                arr.push(i);
                arr.push(num / i);
              } else {
                arr.push(i);
              }
            }
          }
          const sum = arr.reduce((sum, e) => sum + e, 1);
          if (sum === num) {
            result.push(1);
          } else {
            result.push(0);
          }
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
