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

function getLength(myset){
   
}

function main() {
  var N = Number.parseInt(readLine());
  let myset=new Set();
  let s=readLine();
  for(let i=0;i<N;i++){
    myset.add(s[i]);
  }

  var ans = getLength(myset);
  console.log(ans);
}
