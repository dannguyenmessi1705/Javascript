function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("", (t) => {
    t = parseInt(t);
    if (isNaN(t) || t < 1) {
      rl.close();
      return;
    }
    let testcases = [];
    let currentTestcase = 1;
    const processTestcases = () => {
      if (currentTestcase <= t) {
        rl.question("", (n) => {
          const ne = n.toString();
          if (n[0] == "-") {
            testcases.push(ne.length - 1);
          } else testcases.push(ne.length);
          currentTestcase++;
          processTestcases();
        });
      } else {
        testcases.forEach((n) => {
          console.log(n);
        });
        rl.close();
      }
    };
    processTestcases();
  });
}

main();
