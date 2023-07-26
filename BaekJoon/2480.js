const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let diceValue1 = Number(input[0]);
let diceValue2 = Number(input[1]);
let diceValue3 = Number(input[2]);


if(diceValue1 === diceValue2 && diceValue1 === diceValue3){
  console.log(10000 + (diceValue1 * 1000))
}else if(diceValue1 === diceValue2){
  console.log(1000+diceValue1*100);
}else if(diceValue1 === diceValue3){
  console.log(1000+diceValue1*100);
}else if(diceValue2 === diceValue3){
  console.log(1000+diceValue2*100);
}else{
  console.log(Math.max(diceValue1,diceValue2,diceValue3)*100);
}