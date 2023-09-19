const fs = require("fs");
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
  if (i == result.length) return "0";
  return result.slice(i).join("");
};
const sum = (num1, num2) => {
  const length1 = num1.length;
  const length2 = num2.length;
  const result = new Array(Math.max(length1, length2)).fill(0);
  let i = length1 - 1;
  let j = length2 - 1;
  let k = result.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    const sum = (parseInt(num1[i]) || 0) + (parseInt(num2[j]) || 0) + carry;
    result[k] = sum % 10;
    carry = Math.floor(sum / 10);
    i--;
    j--;
    k--;
  }
  if (carry) {
    result.unshift(carry);
  }
  return result.join("");
};
const main = () => {
  let count = 0;
  const result = [];
  let input = [];
  fs.readFile("bignumber.in", (err, data) => {
    if (err) {
      console.log("Error reading the file", err);
      return;
    }
    input = data
      .toString()
      .split("\n")
      .map((e) => {
        return e.replace(/\r/g, "");
      });
    const test = input.shift();
    while (count < test) {
      const express = input[count].split(" ");
      if (express.includes("+")) {
        result.push(sum(express[0], express[2]));
      } else {
        result.push(multiply(express[0], express[2]));
      }
      count++;
    }
    rl.close();
  });
  rl.on("close", () => {
    fs.writeFileSync("bignumber.out", result.join("\n"));
  });
};
main();
