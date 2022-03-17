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
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// ------------------------
// Event Listeners
// ------------------------

// Validation functionality
signUp_form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username_signUp.value === "") {
    showError(username_signUp, "Username is required");
  } else {
    showSuccess(username_signUp);
  }
});

// Sign In - Sign Up mode Animation
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
