const readline = require("readline");
const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (test) => {
    test = parseInt(test);
    const result = [];
    let count = 1;
    const exec = () => {
      if (count <= test) {
        rl.question("", (n) => {
          let sum = 0;
          for (let i = 1; i <= n; i++) {
            sum += 1 / i;
          }
          result.push(sum.toFixed(5));
          count++;
          exec();
        });
      } else {
        result.forEach((r) => {
          console.log(r);
        });
        rl.close();
      }
    };
    exec();
  });
};
main();
