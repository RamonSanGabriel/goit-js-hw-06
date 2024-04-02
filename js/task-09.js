// Get the elements we'll be working with
const colorSpan = document.querySelector("span.color");
const changeColorButton = document.querySelector("button.change-color");
const body = document.querySelector("body");

// Generate a random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Change the background color and update the displayed color value
const changeBackgroundColor = () => {
  const newColor = getRandomHexColor(colorSpan);
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
};

// Attach the event listener to the button
changeColorButton.addEventListener("click", changeBackgroundColor);
