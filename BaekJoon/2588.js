const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin').toString().split('\n');

const units = b % 10;
const tens = Math.floor((b%100)/10);
const hundreds = Math.floor(b/100);


console.log(a * units);
console.log(a * tens);
console.log(a * hundreds);
console.log(a * b);