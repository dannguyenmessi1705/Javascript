function checkSquare(num) {
  if (parseInt(Math.sqrt(+num)) === Math.sqrt(+num)) return true;
  else return false;
}
function check(start, end) {
  for (let i = start; i <= end; i++) {
    let square = i ** 2;
    let check = true;
    let arr = square.toString().split("");
    arr.forEach((num) => {
      if (!checkSquare(num)) {
        check = false;
      }
    });
    if (check == true) return square;
  }
}

function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("", (test) => {
    test = parseInt(test);
    let curTest = 1;
    let result = [];
    const exec = () => {
      if (curTest <= test) {
        rl.question("", (n) => {
          const start = Math.ceil(Math.sqrt(10 ** (+n - 1)));
          const end = Math.floor(Math.sqrt(10 ** +n - 1));
          result.push(check(start, end));
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
}
main();
