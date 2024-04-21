let userName = "";
let yourTeam = "";
let oponTeam = "";
let batting = false;
let bowling = false;
const scoreTypes = ["Catch Out","Bowled", 0, 1, 2, 3, 4, 5, 6];
let wicketsRemaining = 10;
let totalRuns = 0;

function getUserName() {
  const userInput = document.getElementById("user-name");
  userName = userInput.value;

  const user = document.getElementById("user");
  user.innerText = userName;

  const loginSection = document.getElementById("login");
  loginSection.classList.add("hide");

  const teamSelection = document.getElementById("team-selection");
  teamSelection.classList.remove("hide");
}

function selectTeam(id) {
  const selectedTeam = document.getElementById(id);
  const selectedTeamName = selectedTeam.innerText;
  if (yourTeam !== "") {
    oponTeam = selectedTeamName;
  } else {
    yourTeam = selectedTeamName;
  }
  selectedTeam.classList.add("selected-team");

  const yourTeamText = document.getElementById("your-selection-text");
  const oponTeamText = document.getElementById("opon-selection-text");

  yourTeamText.classList.add("hide");
  oponTeamText.classList.remove("hide");
}

function gotoNextFromTeam() {
  const teamSection = document.getElementById("team-selection");
  teamSection.classList.add("hide");

  const tossSection = document.getElementById("toss");
  tossSection.classList.remove("hide");
}

function getUserToss(selected) {
  const tossResult = Math.floor(Math.random() * 2);
  const isWon = tossResult === selected;
  if (isWon) {
    alert("Congratulations You Won The Toss");
    batting = true;
  } else {
    alert("Unfortunately You Loss The Toss");
    bowling = true;
  }

  const tossSection = document.getElementById("toss");
  tossSection.classList.add("hide");

  const matchSection = document.getElementById("match");
  matchSection.classList.remove("hide");
  // console.log(yourTeam, oponTeam);

  const yourSelectedTeam = document.getElementById("your-team");
  yourSelectedTeam.innerText = yourTeam;

  yourSelectedTeam.classList.add("your-team");

  const oppoSelectedTeam = document.getElementById("opon-team");
  oppoSelectedTeam.innerText = oponTeam;

  if (isWon) {
    yourSelectedTeam.innerText = yourTeam + "*";
  } else {
    oppoSelectedTeam.innerText = oponTeam + "*";
  }
  const wicketsRemainingSection = document.getElementById("wicket-remains");
  wicketsRemainingSection.innerText = wicketsRemaining;
  const totalRunsSection = document.getElementById("total-runs")
  totalRunsSection.innerText = totalRuns
}


function playBall() {
  const ballResultIndex = Math.floor(Math.random() * scoreTypes.length);
  alert(scoreTypes[ballResultIndex]);

  if(ballResultIndex===0 || ballResultIndex===1){
    const wicketsRemainingSection = document.getElementById("wicket-remains");
    wicketsRemainingSection.innerText = --wicketsRemaining;
  }
  else{
   totalRuns+=scoreTypes[ballResultIndex]
   const totalRunsSection=document.getElementById("total-runs");
   totalRunsSection.innerText=totalRuns
  }
}
