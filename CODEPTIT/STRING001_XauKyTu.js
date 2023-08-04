function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (test) => {
    test = parseInt(test);
    if (isNaN(test) || test < 1) {
      rl.close();
      return;
    }
    let currentTest = 1;
    let result = [];
    const exec = () => {
      if (currentTest <= test) {
        rl.question("", (str) => {
          const arr = str.split(" ");
          let child = arr[2];
          let parent = arr[5];
          child = child.slice(1, -2);
          parent = parent.slice(1, -1);
          let check = parent.search(child);
          result.push(check);
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
