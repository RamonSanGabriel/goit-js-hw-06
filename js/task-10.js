let box = document.querySelector('#controls');
console.log(box);
const input = document.querySelector('input[max="100"]');
console.log(input);
const newBtn = document.querySelector('[data-create]');
console.log(newBtn);
const clearBtn = document.querySelector('[data-destroy]');
console.log(clearBtn);
const div = document.querySelector('#boxes');
console.log(div);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (input) => {
  let boxes = [];
  for (let i = 0; i < input; i += 1) {
    const box = document.createElement('div');
    div.style.padding = '10px';
    div.style.backgroundColor = '#e2e2e2';
    div.style.margin = '10px 0';
    div.style.flexWrap = 'wrap';
    div.style.borderRadius = '5px';

    box.style.border = ' 1px solid gray';
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.borderRadius = '5px';
    box.style.margin = '10px';
    box.style.color = '#fff';
    box.style.fontWeight = '700';
    box.textContent = i;
    boxes.push(box);
    div.appendChild(box);
  }
};
const destroyBoxes = () => {
  div.innerHTML = '';
  // box = [];
};
newBtn.addEventListener('click', () => {
  const value = input.value;
  console.log(value);
  if (value > 0) {
    createBoxes(value);
  } else {
    alert('Please enter a positive number');
  }
});
clearBtn.addEventListener('click', destroyBoxes);
destroyBoxes(); // call destroyBoxes() to clear boxes on page load
createBoxes(5); // call createBoxes() to create boxes on page load
console.log(box); // print boxes array to console
console.log(div); // print div element to console
console.log(input); // print input element to console
console.log(newBtn); // print newBtn element to console
console.log(clearBtn); // print clearBtn element to console
console.log(getRandomHexColor()); // print random hex color to console

// newBtn.addEventListener('click', createBoxes);
// console.log(newBtn);
