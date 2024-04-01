let counterValue = 0;
let value = document.getElementById("value");

value.innerText = counterValue;

let incrementBtn = document.querySelector("[data-action='increment']");
let decrementBtn = document.querySelector("[data-action='decrement']");

incrementBtn.addEventListener("click", () => {
  // alert('Increment button clicked');
  counterValue++;
  value.innerText = counterValue;
});

decrementBtn.addEventListener("click", () => {
  // alert('Increment button clicked');
  if (counterValue > 0) {
    counterValue -= 1;
    value.innerText = counterValue;
  }
});
