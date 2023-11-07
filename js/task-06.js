const userInput = document.getElementById('validation-input');
userInput.addEventListener("blur", (event) => {
    const eventValue = event.currentTarget.value.length;
    const requiredValue = userInput.dataset.length;
    if ( eventValue == requiredValue) {
        userInput.classList.add('valid');
        userInput.classList.remove('invalid');
    }
    else {
        userInput.classList.add('invalid');
        userInput.classList.remove('valid');
    }
})
