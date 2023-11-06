
function enableValidation({
  formSelector:"popup__form",
  inputSelector:"popup__input",
  submitButtonSelector:"popup__button",
  inactiveButtonClass:"popup__button_disabled"
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
  ,
}


) {
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

  

  const inputs = [...document.querySelectorAll(".popup-input")];
  inputs.forEach(function (input) {
    input.addEventListener("input", function (event) {
      const inputElement = event.target;
      const errorElement = inputElement.closest(".popup-validate").querySelector(".error-span");
      if (inputElement.validity.valid) {
        hideInputError(errorElement);
      } else {
        showInputError(errorElement, inputElement.validationMessage);
      }
    });
  });

  const imageInputs = [...document.querySelectorAll(".popup-more")];
  imageInputs.forEach(function (imageInput) {
    imageInput.addEventListener("input", function (event) {
    const inputElement = event.target;
    const errorElement = inputElement.closest(".popup-validate").querySelector(".error-span");
    if (inputElement.validity.valid) {
      hideInputError(errorElement);
    } else {
      showInputError(errorElement, inputElement.validationMessage);
    }
  });
})
}
document.addEventListener('DOMContentLoaded', function() {
  function validateInputs(event) {
      const popupContainer = event.target.closest('.popup-element');
      const inputs = popupContainer.querySelectorAll('.popup-input');
      const saveButton = popupContainer.querySelector('.popup__save-button');

      let isValid = true;

      inputs.forEach(function(input) {
          if (input.value.trim() === '') {
              isValid = false;
          }
      });

      if (isValid) {
          saveButton.classList.remove('disabled');
      } else {
          saveButton.classList.add('disabled');
      }
  }

  const inputs = document.querySelectorAll('.popup-input');
  inputs.forEach(function(input) {
      input.addEventListener('input', validateInputs);
  });
});


enableValidation();
