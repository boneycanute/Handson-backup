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

function checkValue(arr) {
    arr = arr.split(' ')
    for (let i in arr) {
        if (arr[i] == 'Prepbytes') {
            return true
        } 
    } return false
}

function main() {
    var N = Number.parseInt(readLine());
    var S = readLine();
    var ans = checkValue(S);
    if (ans == true) {
        console.log("true");
    } else {
        console.log("false");
    }
}
