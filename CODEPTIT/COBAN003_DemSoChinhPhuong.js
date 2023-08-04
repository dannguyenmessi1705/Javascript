function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (test) => {
    test = parseInt(test);
    let currentTest = 1;
    let result = [];
    const exec = () => {
      if (currentTest <= test) {
        rl.question("", (input) => {
          input = input.split(" ");
          const start = Math.ceil(Math.sqrt(input[0]));
          const end = Math.floor(Math.sqrt(input[1]));
          result.push(end - start + 1);
          currentTest++;
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
}
main();
