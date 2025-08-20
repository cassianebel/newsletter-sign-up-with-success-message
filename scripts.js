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
    errorMsg.textContent = "Valid email required";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();
    return;
  }

  const emailElement = document.getElementById("email");

  emailElement.innerText = email;

  emailInput.classList.remove("error");
  emailInput.setAttribute("aria-invalid", "false");
  errorMsg.textContent = "";

  signupSection.classList.add("hide");
  thanksSection.classList.remove("hide");
  thanksSection.setAttribute("tabindex", "-1");
  thanksSection.focus();
  form.reset();
}

form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", (e) => {
  signupSection.classList.remove("hide");
  thanksSection.classList.add("hide");
});
