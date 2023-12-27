const dismissBtn = document.querySelector(".gradient");
const thankState = document.querySelector(".thankState");
const cardBody = document.querySelector(".form-body");
const emailBtn = document.querySelector(".emailBtn");
const inputField = document.getElementById("exampleInputEmail1");
const form = document.querySelector("form");
const emailEntered = document.querySelector(".emailEntered");
const emailErrorText = document.querySelector(".emailErrorText");
// alert(dismissBtn);

dismissBtn.addEventListener("click", () => {
  thankState.classList.toggle("disappear");
  cardBody.classList.toggle("disappear");
  location.reload();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formValidityCheck()) {
    emailEntered.textContent = inputField.value;
    thankState.classList.toggle("disappear");
    cardBody.classList.toggle("disappear");
  } else {
    emailErrorText.style.display = "inline-block";
    inputField.style.borderColor = "red";
    inputField.style.color = "red";
    inputField.style.backgroundColor = "yellow";
  }
});

const formValidityCheck = () => {
  const inputEmailValue = inputField.value;
  let isFormValid = true;
  if (inputEmailValue.trim().length === 0) {
    isFormValid = false;
  }
  return isFormValid;
};
