const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const totalPrice = Number(input[0]);
let x = Number(input[1])
let sum = 0
// i = 2인 이유 3번째 줄 0번은 총 가격 1번은 총 개수 2번 부터 금액과 개수이기 때문에 
// 인덱스 번호 2인 2로 지정
// x + 2인 이유 x = 물건의 총 개수 
// ex) x가 4이면 x + 2 = 6 
// i < 6이다. 그러면 5까지 반복하는 거니 인덱스 번호가 5까지 된다.(input[5])
for(let i = 2; i < x+2; i++){
    let arr = input[i].split(' ') // 가격과 개수를 공백으로 나누어줌
    let price = Number(arr[0]) * Number(arr[1]) // 금액과 개수를 곱해줌
    
    sum += price // price가 누적된 값이 sum에 들어감 
}
  if(sum === totalPrice){
        console.log("Yes")
  }else {
        console.log("No")
  }