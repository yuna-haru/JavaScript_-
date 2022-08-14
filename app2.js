let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


let i;
let num2 = 0;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です');

let result = '';
let i2 = 0;

do{
  i2 = i2 + 1;
  result = result + i2;
}while(i2 < 10);
alert(result)





// 確認問題

alert(5 + 5);
alert(10 - 5);
alert(5 * 5);
alert(25 / 5);