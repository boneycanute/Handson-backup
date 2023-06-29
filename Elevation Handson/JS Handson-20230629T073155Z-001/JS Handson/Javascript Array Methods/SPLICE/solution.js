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

function editElem(arr) {
    arr = arr.split(' ')
    arr = arr.slice(2, arr.length + 1)
    arr = ['Starting', ...arr]
    return arr
}

function main() {
    var N = Number.parseInt(readLine());
    var S = readLine();
    var ans = editElem(S);
    let output = "";
    for (let i = 0; i < ans.length; i++) {
        output += (ans[i] + " ");
    }
    console.log(output);
}
