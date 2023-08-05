const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const FindLength = (n) => {
  let index = n.search("e");
  let dot = n.indexOf(".");
  let length = n.length;
  if (index < 0 && dot < 0) {
    return length + 3;
  } else {
    if (index >= 0) index += 2;
    let l1 = 0,
      l2 = 0;
    if (dot) {
      while (dot != 0) {
        l1++;
        dot--;
      }
    }
    while (index >= 0 && index < n.length) {
      l2 += n[index];
      index++;
    }
    length = +l1 + +l2;
  }
  return length + 3;
};
const Calc = (n, x) => {
  n = parseInt(n);
  x = parseFloat(x);
  let res = 0,
    tu = 1,
    mau = 0;
  for (let i = 1; i <= n; i++) {
    (tu *= x), (mau += i);
    res += tu / mau;
  }
  return {
    res: res,
    length: FindLength(res.toString()),
  };
};
const main = () => {
  rl.question("", (test) => {
    test = parseInt(test);
    let curTest = 1;
    let result = [];
    const exec = () => {
      if (curTest <= test) {
        rl.question("", (input) => {
          let [n, x] = input.split(" ");
          let { res, length } = Calc(n, x);
          result.push(res.toPrecision(length));
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
