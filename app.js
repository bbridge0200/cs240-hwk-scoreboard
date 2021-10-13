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
];

//queries for the six elements on control center
//row2Col1.innerHTML = 3;

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

plusRunNode.addEventListener("click", function (evt) {
  //add one unless over 99
  let str = scoreBoxes[inningNodeVal - 1][whoNodeVal - 1];
  let scoreToAdd = document.querySelector(str);
  scoreToAdd.innerHTML++;
});

let minusRunNode = document.querySelector("#minusButton");

minusRunNode.addEventListener("click", function (evt) {
  //subtract unless runs are already 0
  let str = scoreBoxes[inningNodeVal - 1][whoNodeVal - 1];
  let scoreToSub = document.querySelector(str);
  if (scoreToSub.innerHTML > 0) {
    scoreToSub.innerHTML--;
  }
});
