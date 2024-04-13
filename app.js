function getUserName() {
  const userInput = document.getElementById("user-input");
  const userInputValue = userInput.value;

  const loggedInUserSpan = document.getElementById("logged-in-user");
  loggedInUserSpan.innerHTML = userInputValue;

  const loggedInWrapper = classList = ("hide")

  console.log(loggedInUserSpan, userInputValue);
}

// const teamsSelected = [];

// function getNameAndNext() {
//   const userNameWrapper = document.getElementById("user-name-wrapper");
//   const userName = document.getElementById("user-name").value;
//   const loggedInUser = document.getElementById("logged-in");
//   loggedInUser.innerHTML = userName;

//   userNameWrapper.classList = "hide";
// }

// function getSelectedTeam(id) {
//   const teamDiv = document.getElementById(id);
//   teamsSelected.push(teamDiv.innerText);

//   teamDiv.classList.add("selected");
//   const yourTeam = document.getElementById("your-team");
//   yourTeam.classList = "hide";
//   const oponentTeam = document.getElementById("oponent-team");
//   oponentTeam.classList = "show";

//   console.log(teamsSelected);
// }
