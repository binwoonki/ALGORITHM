const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const n = Number(input);

let result = 0
for (let i = 1; i <= n; i++) {

  result += i;
}

console.log(result);