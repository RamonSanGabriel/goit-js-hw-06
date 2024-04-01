const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  console.log((text.style.fontSize = fontSizeControl.value + "px"));
});
