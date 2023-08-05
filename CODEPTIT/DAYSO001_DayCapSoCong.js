const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const check = (arr, csc) => {
  let newarr = [...arr];
  while (newarr.length > 1) {
    let [f, s] = newarr;
    if (+s - +f != csc) return false;
    newarr.shift();
  }
  return true;
};

const main = () => {
  rl.question("", (test) => {
    test = parseInt(test);
    let curTest = 1;
    let result = [];
    const exec = () => {
      if (curTest <= test) {
        rl.question("", (n) => {
          rl.question("", (arr) => {
            let Arr = arr.split(" ");
            Arr.shift();
            let [f, s] = Arr;
            let csc = +s - +f;
            result.push(check(Arr, csc) ? "YES" : "NO");
          });
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
