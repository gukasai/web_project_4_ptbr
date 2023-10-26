function enableValidation() {
  function hideInputError(errorElement) {
    errorElement.classList.add('hide');
  }

  function showInputError(errorElement, message) {
    errorElement.classList.remove('hide');
    errorElement.textContent = message;
  }

  const inputs = [...document.querySelectorAll(".popup")];
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
}

enableValidation();