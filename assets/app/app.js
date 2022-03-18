const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const container = document.querySelector(".container");
const signIn_form = document.getElementById("signIn_form");
const signUp_form = document.getElementById("signUp_form");
const username_signIn = document.getElementById("username_signIn");
const username_signUp = document.getElementById("username_signUp");
const email = document.getElementById("email");
const password_signIn = document.getElementById("password_signIn");
const password_signUp = document.getElementById("password_signUp");
const password2 = document.getElementById("password2");
const btn_login = document.getElementById("btn-login");
const btn_register = document.getElementById("btn-register");

// Show input error message
function showError(input, message) {
  const formControler = input.parentElement;
  formControler.className = "form-controler error";
  const small = formControler.querySelector("small");
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControler = input.parentElement;
  formControler.className = "form-controler success";
}

// Show if an email is valid
function isEmailValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get field name function
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// ------------------------
// Event Listeners
// ------------------------

// Validation functionality
signUp_form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([
    username_signIn,
    username_signUp,
    email,
    password_signIn,
    password_signUp,
    password2,
  ]);
});

// Sign In - Sign Up mode Animation
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
