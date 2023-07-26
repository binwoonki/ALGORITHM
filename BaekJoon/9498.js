const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const result = Number(input);

if(result >= 90){
    console.log("A")
}else if( result >= 80){
    console.log("B")
}else if (result >= 70){
    console.log("C")
}else if (result >= 60){
    console.log("D")
}else{
    console.log("F")
}