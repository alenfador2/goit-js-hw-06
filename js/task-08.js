const submitForm = document.querySelector('.login-form');


submitForm.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();
    // const userEmail = document.querySelector('input[type = "email"]');
    // const userPassword = document.querySelector('input[type = "password"]');
    const login = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (login === "" || password === "") {
        return alert("Proszę wypełnić wszystkie pola!");
    }
    else {
        console.log(`Login: ${login}, Password: ${password}`);
        submitForm.reset();
    }
    
}
