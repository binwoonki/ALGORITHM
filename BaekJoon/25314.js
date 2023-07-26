const input = require('fs').readFileSync('/dev/stdin').toString();

const c = Number(input) / 4
let result = '' // 빈 문자열

for(i = 1; i <= c; i++){
  // input / 4 나온 값 만큼 반복하며, 끝날때마다 long을 넣어준다. 
    result += "long " 
}

console.log(result + 'int')