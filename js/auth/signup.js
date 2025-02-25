// Capturar los elementos del formulario
const NomInput = document.getElementById("NomInput");
const PrenomInput = document.getElementById("PrenomInput");
const EmailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const ValidatePasswordInput = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

// Agregar eventos para validar cuando el usuario escribe
NomInput.addEventListener("keyup", validateForm);
PrenomInput.addEventListener("keyup", validateForm);
EmailInput.addEventListener("keyup", validateForm);
PasswordInput.addEventListener("keyup", validateForm);
ValidatePasswordInput.addEventListener("keyup", validateForm);

// Validar el formulario al cargar la página
document.addEventListener("DOMContentLoaded", validateForm);

// Función principal para validar el formulario
function validateForm() {
    const nomOK = validateRequired(NomInput);
    const prenomOK = validateRequired(PrenomInput);
    const mailOK = validateEmail(EmailInput);
    const passwordOK = validatePassword(PasswordInput);
    const confirmOK = validateConfirmationPassword(PasswordInput, ValidatePasswordInput);

    // Habilitar o deshabilitar el botón según las validaciones
    btnValidation.disabled = !(nomOK && prenomOK && mailOK && passwordOK && confirmOK);
}

// Valida si el campo está vacío
function validateRequired(input) {
    if (input.value.trim() !== "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Valida el email
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Valida la contraseña y muestra el mensaje de error
function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,20}$/;
    const passwordUser = input.value;

    if (passwordUser.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        input.nextElementSibling.style.display = "none"; // Ocultar mensaje de error
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        input.nextElementSibling.style.display = "block"; // Mostrar mensaje de error
        return false;
    }
}

// Valida si las contraseñas coinciden
function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value === inputConfirmPwd.value && inputPwd.value !== "") {
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        inputConfirmPwd.nextElementSibling.style.display = "none"; // Ocultar mensaje de error
        return true;
    } else {
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.nextElementSibling.style.display = "block"; // Mostrar mensaje de error
        return false;
    }
}
