let counterValue = 0;
const userValue = document.getElementById("value");
const decrementation = () => {
    userValue.textContent--;
    counterValue--;
    console.log(counterValue);
}
const decrButton = document.querySelector('button[data-action = decrement]');
decrButton.addEventListener('click', decrementation);
const incrementation = () => {
    userValue.textContent++;
    counterValue++;
    console.log(counterValue);
}
const incrButton = document.querySelector("button[data-action = 'increment']");
incrButton.addEventListener("click", incrementation);