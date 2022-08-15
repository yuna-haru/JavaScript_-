// console.logはデベロッパーツールのコンソールに表示される

// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// 再宣言…同じ変数(今回ではnickname)で宣言できるのはvarのみ

// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// 再代入…同じ変数に別の値を再代入できるのはvarとletのみ

// var str = "webcamp"
// function foo() {
  // console.log(str)
  // var str = "dmm webcamp"
  // console.log(str)
// }
// foo()
// コンソールで実際に確認してみると、undefinedとdmm webcampと表示される。
// 本来ならばwebcampとdmm webcampと表示してほしい。
// 上記は、
// var str = "webcamp"
// function foo() { 
  // var str
  // console.log(str)
  // str = "dmm webcamp"
  // console.log(str)
// }
// foo()
// と再代入しているのと同じ表記である。console.log(str)が関数内に記入されているから。
// undefinedはvarの初期設定。

for (let i = 0; i < 10; i++) {
  console.log(i)
}