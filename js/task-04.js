const counterValue = document.getElementById("value");
const decrementation = () => {
    counterValue.textContent--;
}
const decrButton = document.querySelector('button[data-action = decrement]');
decrButton.addEventListener('click', decrementation);
const incrementation = () => {
    counterValue.textContent++;
}
const incrButton = document.querySelector("button[data-action = 'increment']");
incrButton.addEventListener("click", incrementation);