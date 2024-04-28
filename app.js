let userName = "";
let yourTeam = "";
let oponTeam = "";
let isBatting = null;
const scoreTypes = ["Catch Out", "Bowled", 0, 1, 2, 3, 4, 5, 6];
let wicketsRemaining = 2;
let totalRuns = 0;
let oppoSelectedTeam = null;
let yourSelectedTeam = null;
let targetSet = 0;
let isGameWon = false;



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
    isBatting = true;
  } else {
    alert("Unfortunately You Loss The Toss");
    isBatting = false;
  }

  const tossSection = document.getElementById("toss");
  tossSection.classList.add("hide");

  const matchSection = document.getElementById("match");
  matchSection.classList.remove("hide");

  yourSelectedTeam = document.getElementById("your-team");
  yourSelectedTeam.innerText = yourTeam;

  yourSelectedTeam.classList.add("your-team");

  oppoSelectedTeam = document.getElementById("opon-team");
  oppoSelectedTeam.innerText = oponTeam;

  if (isWon) {
    yourSelectedTeam.innerText = yourTeam + "*";
  } else {
    oppoSelectedTeam.innerText = oponTeam + "*";
  }
  const wicketsRemainingSection = document.getElementById("wicket-remains");
  wicketsRemainingSection.innerText = wicketsRemaining;
  const totalRunsSection = document.getElementById("total-runs");
  totalRunsSection.innerText = totalRuns;
}

function playBall() {
  const matchSection = document.getElementById("match");
  const ballResultIndex = Math.floor(Math.random() * scoreTypes.length);
  alert(scoreTypes[ballResultIndex]);
  const totalRunsSection = document.getElementById("total-runs");
  const resultSection = document.getElementById("result-wrapper");

  if (ballResultIndex === 0 || ballResultIndex === 1) {
    const wicketsRemainingSection = document.getElementById("wicket-remains");
    wicketsRemainingSection.innerText = --wicketsRemaining;

    if (wicketsRemaining === 0) {
      if (targetSet > 0) {
        alert("Game finished");
        if (isGameWon) {
          resultSection.innerText =
            "Congratulation " +
            yourSelectedTeam.innerText.replace("*", "") +
            " won";
        } else {
          resultSection.innerText =
            "Sadly " + oppoSelectedTeam.innerText.replace("*", "") + " won";
        }
        matchSection.classList.add("hide");
        resultSection.classList.remove("hide");
        isGameWon = !isBatting;
      } else {
        targetSet = totalRuns + 1;
        alert("All Out, Target Set For " + targetSet);
        totalRuns = 0;
        wicketsRemaining = 2;
      }

      if (isBatting) {
        oppoSelectedTeam.innerText = oppoSelectedTeam.innerText + "*";
        yourSelectedTeam.innerText = yourSelectedTeam.innerText.replace(
          "*",
          ""
        );
      } else {
        yourSelectedTeam.innerText = yourSelectedTeam.innerText + "*";
        oppoSelectedTeam.innerText = oppoSelectedTeam.innerText.replace(
          "*",
          ""
        );
      }
      const targetWrapper = document.getElementById("target-set");
      targetWrapper.innerText = targetSet;

      totalRunsSection.innerText = totalRuns;
      wicketsRemainingSection.innerText = wicketsRemaining;

      isBatting = !isBatting;
    }
  } else {
    totalRuns += scoreTypes[ballResultIndex];
    totalRunsSection.innerText = totalRuns;
    if (totalRuns >= targetSet && targetSet !== 0) {
      isGameWon = isBatting;
      alert("Game Finished");
      matchSection.classList.add("hide");
      resultSection.classList.remove("hide");

      if (isGameWon) {
        resultSection.innerText =
          "Congratulation " +
          yourSelectedTeam.innerText.replace("*", "") +
          " won";
      } else {
        resultSection.innerText =
          "Sadly " + oppoSelectedTeam.innerText.replace("*", "") + " won";
      }
    }
  }
}
