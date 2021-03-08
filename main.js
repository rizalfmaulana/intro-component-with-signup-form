var button = document.querySelector(".btn");
var form = document.querySelector(".box");

var errorMessage = document.querySelectorAll(".error-message");
var input = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      errorMessage[i].style.display = "block";
      input[i].style.borderColor = "red";
      input[i].classList.add("error");
      input[i].style.marginTop = 0;
      button.style.marginTop = 0;
    }
  }
});
