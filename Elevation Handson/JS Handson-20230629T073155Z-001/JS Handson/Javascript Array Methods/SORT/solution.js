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

function sortArray(arr){
    arr = arr.split(' ')
    arr = arr.map(i=>parseInt(i))
    arr.sort()
    return arr
}

function main() {
  var N = Number.parseInt(readLine());
  var S = readLine();
  var ans = sortArray(S);
  let output="";
  for(let i=0;i<ans.length;i++){
    output+=(ans[i]+" ");
  }
  console.log(output);
}
