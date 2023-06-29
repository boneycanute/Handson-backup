process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function specialArray(arr) {
  var newArr = arr.map((item) => {
    if (item % 2 == 0) return item / 2;
    return item * 2;
  });
  return newArr;
}

function main() {
  var N = Number.parseInt(readLine());
  var S = readLine();
  var ans = specialArray(S);
  let output = "";
  for (let i = 0; i < ans.length; i++) {
    output += ans[i] + " ";
  }
  console.log(output);
}
