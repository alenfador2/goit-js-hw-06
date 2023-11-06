const submitForm = document.querySelector('.login-form');


submitForm.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();
    const userEmail = document.querySelector('input[type = "email"]');
    const userPassword = document.querySelector('input[type = "password"]');
    // const formInput = event.target;
    // Probowałem użyć formInput.elements.login.value - nie działa
    const login = userEmail.value;
    const password = userPassword.value;

    if (login === "" || password === "") {
        return alert("Proszę wypełnić wszystkie pola!");
    }
    else {
        console.log(`Login: ${login}, Password: ${password}`);
        submitForm.reset();
    }
    
}
