/**
 * Scoreboard Homework
 * @author Bee Bridge
 */
const scoreBoxes = [
  ["#awayOne", "#homeOne"], //row 0 col 0 and col 1 [inning, team]
  ["#awayTwo", "#homeTwo"],
  ["#awayThree", "#homeThree"],
  ["#awayFour", "#homeFour"],
  ["#awayFive", "#homeFive"],
  ["#awaySix", "#homeSix"],
  ["#awaySeven", "#homeSeven"],
  ["#awayR", "#homeR"],
];

//queries for the six elements on control center

let whoNode = document.querySelector("#who");
let whoNodeVal = whoNode.value;

whoNode.addEventListener("change", function (evt) {
  whoNodeVal = whoNode.value;
});

let inningNode = document.querySelector("#inningChoice");
let inningNodeVal = inningNode.value;

inningNode.addEventListener("change", function (evt) {
  inningNodeVal = inningNode.value;
});

let plusRunNode = document.querySelector("#plusButton");
//increment run buttons:

plusRunNode.addEventListener("click", function (evt) {
  //add one
  let str = scoreBoxes[inningNodeVal - 1][whoNodeVal - 1];
  let scoreToAdd = document.querySelector(str);
  scoreToAdd.innerHTML++;
  let totalScore = document.querySelector(scoreBoxes[7][whoNodeVal - 1]);
  totalScore.innerHTML++;
});

let minusRunNode = document.querySelector("#minusButton");

minusRunNode.addEventListener("click", function (evt) {
  //subtract unless runs are already 0
  let str = scoreBoxes[inningNodeVal - 1][whoNodeVal - 1];
  let scoreToSub = document.querySelector(str);
  if (scoreToSub.innerHTML > 0) {
    scoreToSub.innerHTML--;
    let totalScore = document.querySelector(scoreBoxes[7][whoNodeVal - 1]);
    totalScore.innerHTML--;
  }
});
//music and picture change:
let noteNode = document.querySelector("#musButton");
noteNode.addEventListener("click", function (evt) {
  let rand2 = Math.floor(Math.random() * 2);
  let rand3 = Math.floor(Math.random() * 3);
  if (rand2 === 0) {
    document.querySelector("#pageImage").src = "images/megaphone.png";
  }
  if (rand2 === 1) {
    document.querySelector("#pageImage").src = "images/ups.png";
  }
  if (rand3 === 0) {
    var audio = new Audio("sounds/buildup.mp3");
    audio.play();
  }
  if (rand3 === 1) {
    var audio = new Audio("sounds/charge1.mp3");
    audio.play();
  }
  if (rand3 === 2) {
    var audio = new Audio("sounds/charge2.mp3");
    audio.play();
  }
});

let pianoNode = document.querySelector("#pianoButton");
pianoNode.addEventListener("click", function (evt) {
  document.querySelector("#pageImage").src = "images/sdchicken.jpg";
  var audio = new Audio("sounds/chickendance.mp3");
  audio.play();
});
