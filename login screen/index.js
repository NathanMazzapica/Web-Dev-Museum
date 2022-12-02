const body = document.body;

const loginButton = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");

const usernameInputGroup = document.getElementById("user-input-group");
const usernameField = loginForm.elements.username;

const passwordInputGroup = document.getElementById("pass-input-group");
const passwordField = loginForm.elements.password;

const testUser = "generic";
const testPass = "1234";

usernameField.addEventListener("click", () => {
  usernameInputGroup.classList.remove("error");
  usernameInputGroup.classList.remove("success");
});

passwordField.addEventListener("click", () => {
  passwordInputGroup.classList.remove("error");
  passwordInputGroup.classList.remove("success");
});

loginButton.addEventListener("click", () => {
  let user = usernameField.value;
  let pass = passwordField.value;
  console.log(user);
  console.log(pass);

  validateUsername(user);
  validatePassword(pass);
});

function validateUsername(user) {
  if (isInputNull(user)) {
    displayError(usernameInputGroup, "Username is required.");
  } else if (user != testUser) {
    displayError(
      usernameInputGroup,
      "Invalid Username. Note : Username is case sensitive."
    );
  } else {
    displaySuccess(usernameInputGroup);
  }
}

function validatePassword(pass) {
  if (isInputNull(pass)) {
    displayError(passwordInputGroup, "Password is required.");
  } else if (pass != testPass) {
    displayError(passwordInputGroup, "Invalid Password");
  } else {
    displaySuccess(passwordInputGroup);
  }
}

function isInputNull(input) {
  if (input === "" || input == null) return true;
}

function displayError(field, errorText) {
  console.log("huh, whuh?");
  field.children[2].innerText = errorText;
  field.classList.add("error");
}
function displaySuccess(field) {
  field.classList.add("success");
}
