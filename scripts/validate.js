function hideInputError(errorElement) {
    if (!errorElement.classList.contains('disabled')) {
        errorElement.classList.add('hide');
    }
}

function showInputError(errorElement, message) {
    if (!errorElement.classList.contains('disabled')) {
        errorElement.classList.remove('hide');
        errorElement.textContent = message;
    }
}

function configurarCampoComValorInicial(input, elementoOrigem, variavelControle) {
    const campoInput = document.querySelector(input);
    const textoAtual = document.querySelector(elementoOrigem).textContent;

    campoInput.addEventListener('focus', function () {
        if (!variavelControle) {
            this.value = textoAtual;
            variavelControle = true;
        }
    });
}

function hideShowInputError(inputElement, validationMessage) {
    const errorElement = inputElement.closest(".popup-validate").querySelector(".error-span");
    if (inputElement.validity.valid) {
        hideInputError(errorElement);
    } else {
        showInputError(errorElement, validationMessage);
    }
}

const inputs = [...document.querySelectorAll(".popup-input")];
inputs.forEach(function (input) {
    input.addEventListener("input", function (event) {
        hideShowInputError(event.target, event.target.validationMessage);
    });
});

function validateInputs(event) {
    const popupContainer = event.target.closest('.popup-element');
    const inputs = popupContainer.querySelectorAll('.popup-input');
    const saveButton = popupContainer.querySelector('.popup__save-button');

    let isValid = true;

    inputs.forEach(function (input) {
        if (!input.validity.valid) {
            isValid = false;
        }
    });

    if (isValid) {
        saveButton.classList.remove('disabled')
        saveButton.addEventListener('click', SalvarProfile);
        saveButtonMore.addEventListener('click', createCardFromInput);
    } else {
        saveButton.classList.add('disabled');
        saveButton.removeEventListener('click', SalvarProfile);
        saveButtonMore.removeEventListener('click', createCardFromInput);
    }
}


const focusInputs = document.querySelectorAll('.popup-input');
focusInputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        input.addEventListener('input', validateInputs);
    });
});
