let alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
// alert('あなたの選んだ手は' + user_hand + 'です。');


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')

function getJAhand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;
  
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name
}

