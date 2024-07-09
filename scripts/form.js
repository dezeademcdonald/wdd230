const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");
const feedback = document.querySelector("#feedback");

repeatPassword.addEventListener('focusout', controlar)

function controlar() {

    if (password.value !== repeatPassword.value) {
        password.value = "";
        repeatPassword.value = "";
        feedback.textContent = "Password did not match";

    } else {
        feedback.textContent = "";
    }
}
