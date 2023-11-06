const body = document.querySelector('body');
const colorNum = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', bodyColor);

function bodyColor(event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  colorNum.textContent = `${getRandomHexColor()}`;
}
