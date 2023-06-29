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

function getLength(mymap){
   
}

function main() {
  var N = Number.parseInt(readLine());
  let mymap=new Map();
  for(let i=0;i<N;i++){
    let s=readLine();
    mymap.set(s[0],s[1]);
    
  }

  var ans = getLength(mymap);
  let output="";
  for(let skey of ans.keys()){
    console.log(skey+" "+ans.get(skey));
  }
 
}
