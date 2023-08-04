const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const maxHour = (hour) => {
  let arr = hour.split("");
  let [first, second] = arr;
  if (first == "?" && second == "?") {
    return (hour = "23");
  } else if (first == "?" && second != "?") {
    if (+second <= 3) return (hour = "2" + second);
    else return (hour = "1" + second);
  } else if (first != "?" && second == "?") {
    if (+first == 2) return (hour = first + "3");
    else return (hour = first + "9");
  } else return hour;
};
const maxMinute = (minute) => {
  let arr = minute.split("");
  let [first, second] = arr;
  if (first == "?") first = "5";
  if (second == "?") second = "9";
  return (minute = first.toString() + second.toString());
};
const main = () => {
  rl.question("", (test) => {
    test = parseInt(test);
    let curTest = 1;
    let result = [];
    const exec = () => {
      if (curTest <= test) {
        rl.question("", (str) => {
          let time = str.split(" ").pop().slice(1, -1).split(":");
          let [hour, min] = time;
          result.push(`"${maxHour(hour)}:${maxMinute(min)}"`);
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
