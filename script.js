let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let homeScore = 0;
let guestScore = 0;

function homePlusOne() {
  homeScore += 1;
  scoreHome.textContent = homeScore;
}

function homePlusTwo() {
  homeScore += 2;
  scoreHome.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  scoreHome.textContent = homeScore;
}

function resetHome() {
  scoreHome.textContent = homeScore
}

function guestplusOne() {
  guestScore += 1;
  scoreGuest.textContent = guestScore;
}

function guestplusTwo() {
  guestScore += 2;
  scoreGuest.textContent = guestScore;
}
function guestplusThree() {
  guestScore += 3;
  scoreGuest.textContent = guestScore;
}

function resetGuest() {
  scoreHome.textContent = guestScore
}