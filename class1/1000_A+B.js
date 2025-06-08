const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  return a + b;
}

console.log(solution(input));
