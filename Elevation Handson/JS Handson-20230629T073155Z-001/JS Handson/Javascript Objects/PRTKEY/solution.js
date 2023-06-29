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

function printkey(arr) {
  var keys = Object.keys(arr);
  for (let i in keys) {
    if (arr[keys[i]] === "Prepbytes") {
      return keys[i];
    }
  }
}

function main() {
  var N = Number.parseInt(readLine());
  let myobj = {};
  for (let i = 0; i < N; i++) {
    let s = readLine();
    myobj[s[0]] = s[1];
  }

  var ans = printkey(myobj);
  console.log(ans);
}
