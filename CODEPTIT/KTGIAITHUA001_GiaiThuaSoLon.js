const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const multiply = (num1, num2) => {
  const length1 = num1.length;
  const length2 = num2.length;
  const result = new Array(length1 + length2).fill(0);
  for (let i = length1 - 1; i >= 0; i--) {
    for (let j = length2 - 1; j >= 0; j--) {
      const mul = parseInt(num1[i]) * parseInt(num2[j]);
      const sum = result[i + j + 1] + mul;
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }
  let i = 0;
  while (i < result.length && result[i] === 0) {
    i++;
  }
  return result.slice(i).join("");
};
const factorial = (n) => {
  const arr = ["1"];
  let result = "1";
  for (let i = 2; i <= n; i++) {
    result = multiply(result, i.toString());
    arr.push(result);
  }
  return arr;
};
const main = () => {
  let count = 1;
  const testcase = []
  rl.question("", (test) => {
    rl.on("line", (input) => {
      count++;
      testcase.push(parseInt(input));
      if (count > test) {
        rl.removeAllListeners("line");
        const result = factorial(Math.max(...testcase));
        testcase.forEach(e => {
            if (e === 0) {
                console.log("1");
            }
            else console.log(result[e - 1]);
        })
        rl.close();
      }
    });
  });
};
main();
