const NomInput = document.getElementById("NomInput");
const PrenomInput = document.getElementById("PrenomInput");
const AllergiesInput = document.getElementById("AllergiesInput");
const NBConvivesInput = document.getElementById("NBConvivesInput");
const btnValidation = document.getElementById("btn btn-primary");

AllergiesInput.addEventListener("keyup", validateForm);
NBConvivesInput.addEventListener("keyup", validateForm);

document.addEventListener("DOMContentLoaded", validateForm);

function validateForm() {
    const nomOK = validateRequired(NomInput);
    const prenomOK = validateRequired(PrenomInput);
    const AllergiesOK = validateEmail(AllergiesInput);
    const NBConvivesOK = validatePassword(NBConvivesInput);

    // Habilitar o deshabilitar el botón según las validaciones
    btnValidation.disabled = !(nomOK && prenomOK && AllergiesOK && NBConvivesOK);
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
