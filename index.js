const dismissBtn = document.querySelector(".gradient");
const thankState = document.querySelector(".thankState");
const cardBody = document.querySelector(".form-body");
const emailBtn = document.querySelector(".emailBtn");
const inputField = document.getElementById("exampleInputEmail1");
const form = document.querySelector("form");
const emailEntered = document.querySelector(".emailEntered");
// alert(dismissBtn);

dismissBtn.addEventListener("click", () => {
  thankState.classList.toggle("disappear");
  cardBody.classList.toggle("disappear");
  location.reload();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailEntered.textContent = inputField.value;
  thankState.classList.toggle("disappear");
  cardBody.classList.toggle("disappear");
});
