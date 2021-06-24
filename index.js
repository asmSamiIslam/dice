function diceRole(){
  var randomNumber1 = Math.floor(Math.random() * 6 )+1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);
  // document.getElementsByClassName("img1")[0].src = "images/dice"+randomNumber1+".png";


  var randomNumber2 = Math.floor(Math.random() * 6 )+1;

  document.querySelector("img.img2").src  = "images/dice"+randomNumber2+".png";

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "🚩player 1 wins!";
  }else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerText = "player 2 wins! 🚩";
  }else{
    document.querySelector("h1").innerText = "Draw!";
  }
}
// MyWork
// var randomNumber1 = Math.floor(Math.random() * 6 )+1;
//
// document.getElementsByClassName("img1")[0].src = "images/dice"+randomNumber1+".png";
//
// var randomNumber2 = Math.floor(Math.random() * 6 )+1;
//
// document.querySelector("img.img2").src  = "images/dice"+randomNumber2+".png";
//
// if(randomNumber1>randomNumber2){
//   document.querySelector("h1").innerText = "🚩player 1 wins";
// }else if (randomNumber1<randomNumber2) {
//   document.querySelector("h1").innerText = "player 2 wins 🚩";
// }else{
//   document.querySelector("h1").innerText = "Draw";
// }
