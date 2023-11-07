const colection = document.getElementById('boxes');
const userInput = document.querySelector('input[type = number]');
const destroyButton = document.querySelector('button[data-destroy]');
const createButton = document.querySelector('button[data-create]');
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = userInput.value;
  for (let i = 1; i <= amount; i++){
    const newElement = document.createElement('div');
    colection.append(newElement);
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${30+i*10}px`;
    newElement.style.height = `${30+i*10}px`;
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}
function destroyBoxes() {
  colection.innerHTML = "";
}


