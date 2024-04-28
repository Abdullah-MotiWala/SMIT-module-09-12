let userName = "";
let yourTeam = "";
let oponTeam = "";
let isBatting = null;
const scoreTypes = ["Catch Out", "Bowled", 0, 1, 2, 3, 4, 5, 6];
let wicketsRemaining = 2;
let totalRuns = 0;
let oppoSelectedTeam = document.getElementById("opon-team");
let yourSelectedTeam = document.getElementById("your-team");
let targetSet = 0;
let isGameWon = false;
// login and team selection wrapper
const userInput = document.getElementById("user-name");
const user = document.getElementById("user");
const loginSection = document.getElementById("login");
const teamSelection = document.getElementById("team-selection");

// team selection
const yourTeamText = document.getElementById("your-selection-text");
const oponTeamText = document.getElementById("opon-selection-text");

// toss
const tossSection = document.getElementById("toss");

// match section
const matchSection = document.getElementById("match");
const totalRunsSection = document.getElementById("total-runs");

// result section
const resultSection = document.getElementById("result-wrapper");
const targetWrapper = document.getElementById("target-set");

const wicketsRemainingSection = document.getElementById("wicket-remains");

// helpers
function hideSection(section) {
  section.classList.add("hide");
}
function showSection(section) {
  section.classList.remove("hide");
}

function getUserName() {
  userName = userInput.value;
  user.innerText = userName;
  hideSection(loginSection);
  showSection(teamSelection);
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
  hideSection(yourTeamText);
  showSection(oponTeamText);
}

function gotoNextFromTeam() {
  hideSection(teamSelection);
  showSection(tossSection);
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

  hideSection(tossSection);
  showSection(matchSection);

  yourSelectedTeam.innerText = yourTeam;
  yourSelectedTeam.classList.add("your-team");
  oppoSelectedTeam.innerText = oponTeam;

  if (isWon) {
    yourSelectedTeam.innerText = yourTeam + "*";
  } else {
    oppoSelectedTeam.innerText = oponTeam + "*";
  }
  totalRunsSection.innerText = totalRuns;
  wicketsRemainingSection.innerText = wicketsRemaining
}

function playBall() {
  const ballResultIndex = Math.floor(Math.random() * scoreTypes.length);
  alert(scoreTypes[ballResultIndex]);

  if (ballResultIndex === 0 || ballResultIndex === 1) {
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
        hideSection(matchSection);
        showSection(resultSection);
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

      hideSection(matchSection);
      showSection(resultSection);

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
