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

function combineArray(arr, brr) {
    arr = arr.split(' ')
    brr = brr.split(' ')
    const a = [...arr, ...brr]
    return a
}

function main() {
    var N = Number.parseInt(readLine());
    var S = readLine();
    var P = readLine();
    var ans = combineArray(S, P);
    let output = "";
    for (let i = 0; i < ans.length; i++) {
        output += (ans[i] + " ");
    }
    console.log(output);
}
