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

function accesssecond(dateobj) {
  dateobj.setSeconds(11);
  return dateobj.getSeconds();
}

function main() {
  let year = Number.parseInt(readLine());
  let month = Number.parseInt(readLine());
  let date = Number.parseInt(readLine());
  let dateobj = new Date(year, month, date);
  var ans = accessminutes(dateobj);
  console.log(ans);
}
