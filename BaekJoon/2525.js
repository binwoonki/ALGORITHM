const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

let time = Number(input[1]);

let h = Math.floor((hour * 60 + minute + time) / 60);
let m = (hour * 60 + minute + time) % 60;

if(h >= 24){
  h -= 24
}

console.log(h, m);