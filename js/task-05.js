const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    output.textContent = input.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
});
