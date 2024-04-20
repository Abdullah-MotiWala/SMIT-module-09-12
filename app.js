let userName = "";
let yourTeam = "";
let oponTeam = "";
let batting = false;
let bowling = false;

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
}
