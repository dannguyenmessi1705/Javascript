const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum.toString();
};

const main = () => {
  rl.question("Enter the number of testcases: ", (testcases) => {
    testcases = parseInt(testcases);

    if (isNaN(testcases) || testcases <= 0) {
      console.log(
        "Invalid input. The number of testcases must be a positive integer."
      );
      rl.close();
      return;
    }

    const exec = (currentTestcase) => {
      if (currentTestcase <= testcases) {
        rl.question(
          "Enter the number of elements (n) for testcase " +
            currentTestcase +
            ": ",
          (n) => {
            n = parseInt(n);

            if (isNaN(n) || n <= 0) {
              console.log(
                "Invalid input. The number of elements (n) must be a positive integer."
              );
              exec(currentTestcase);
              return;
            }

            let a = [];

            const readElements = (count) => {
              if (count < n) {
                rl.question(
                  `Enter element ${
                    count + 1
                  } for testcase ${currentTestcase}: `,
                  (input) => {
                    let element = input;
                    if (isNaN(element)) {
                      console.log(
                        "Invalid input. Please enter a valid integer."
                      );
                      readElements(count);
                      return;
                    }

                    a.push(element);
                    readElements(count + 1);
                  }
                );
              } else {
                console.log("Array for testcase " + currentTestcase + ":", a);
                const totalSum = sumArray(a);
                console.log(
                  "Total sum of the elements for testcase " +
                    currentTestcase +
                    ":",
                  totalSum
                );
                exec(currentTestcase + 1);
              }
            };

            readElements(0);
          }
        );
      } else {
        rl.close();
      }
    };

    exec(1);
  });
};

main();
