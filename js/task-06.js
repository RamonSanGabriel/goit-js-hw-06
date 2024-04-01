let input = document.getElementById("validation-input");
let length = document.querySelector('[data-length="6"]');
let text = document.querySelector('[type = "text"]');
let validInput = document.querySelector("#validation-input.valid");
let invalidInput = document.querySelector("#validation-input.invalid");

const checkLength = () => {
  if (input.value.length < 6) {
    length.classList.add("invalid");
  } else {
    length.classList.remove("invalid");
    length.classList.add("valid");
  }
};
input.addEventListener("blur", checkLength);
