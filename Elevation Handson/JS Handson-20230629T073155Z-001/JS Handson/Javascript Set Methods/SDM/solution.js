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

function removeElement(myset) {
    myset.delete('present')
    return myset;
}

function main() {
    var N = Number.parseInt(readLine());
    let myset = new Set();
    let s = readLine();
    for (let i = 0; i < N; i++) {
        myset.add(s[i]);
    }

    var ans = removeElement(myset);
    let output = "";
    for (let i = 0; i < ans.length; i++) {
        output += (ans[i] + " ");
    }
    console.log(output);
}