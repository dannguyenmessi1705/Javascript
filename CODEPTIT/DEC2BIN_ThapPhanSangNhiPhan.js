const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const main = () => {
  rl.question("", (test) => {
    test = parseInt(test);
    let curTest = 1;
    let result = [];
    const exec = () => {
      if (curTest <= test) {
        rl.question("", (n) => {
          let bin = [];
          n = parseInt(n);
          while (n != 0) {
            bin.push(n % 2);
            n = Math.floor(n / 2);
          }
          if (bin[bin.length - 1] == 0) {
            bin.pop();
          }
          let str = bin.reverse().join("");
          result.push(str);
          curTest++;
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
