const userInput = document.getElementById('validation-input');
// console.log(userInput);
// console.log(userInput.dataset.length);
userInput.addEventListener("blur", (event) => {
    const eventValue = event.currentTarget.value.length;
    const requiredValue = userInput.dataset.length;
    if ( eventValue >= requiredValue) {
        // userInput.style.borderColor = "#4caf50";
        userInput.classList.toggle('valid');
    }
    else {
        userInput.classList.toggle('invalid');
        // userInput.style.borderColor = "#f44336";
    }
})
// console.log(userInput.textContent.length);