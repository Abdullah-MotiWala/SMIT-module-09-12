function validation(nameID, fNameID, cnicID) {
  const nameInput = document.getElementById(nameID);
  const fNameInput = document.getElementById(fNameID);
  const cnicInput = document.getElementById(cnicID);

  const nameValue = nameInput.value;
  const fNameValue = fNameInput.value;
  const cnicValue = cnicInput.value;

  if (nameValue.length < 3) {
    alert("Value is rquired");
  }

  console.log(nameValue);
  alert("run");
}

// const nameInput = document.getElementById("name");
// console.log(nameInput);

// const myDiv = document.getElementById("myName");
// console.log(myDiv.innerHTML);
// console.log(myDiv.innerText);
