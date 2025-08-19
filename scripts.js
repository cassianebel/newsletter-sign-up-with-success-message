const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismiss");
const signupSection = document.querySelector(".signup");
const thanksSection = document.querySelector(".thanks");

function handleSubmit(e) {
  e.preventDefault();

  const errorMsg = document.querySelector(".error-msg");
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !emailRegex.test(email)) {
    emailInput.classList.add("error");
    errorMsg.classList.add("error");
    return;
  }

  const emailElement = document.getElementById("email");

  emailElement.innerText = email;

  emailInput.classList.remove("error");
  errorMsg.classList.remove("error");

  signupSection.classList.add("hide");
  thanksSection.classList.remove("hide");
  form.reset();
}

form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", (e) => {
  signupSection.classList.remove("hide");
  thanksSection.classList.add("hide");
});
