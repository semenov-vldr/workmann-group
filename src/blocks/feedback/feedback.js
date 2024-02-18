const feedback = document.querySelector(".feedback");

if (feedback) {

  const formGroupDropdown = document.querySelector(".form__group--dropdown");

  const invTypeInput = document.querySelector("#inv-type");
  const dropdown = document.querySelector(".form__dropdown");

  invTypeInput.addEventListener("click", () => {
    dropdown.classList.add('visible');
    formGroupDropdown.classList.add('selected');
  });

  document.addEventListener("click", (evt) => {
    if (evt.target !== invTypeInput) {
      dropdown.classList.remove('visible');
      formGroupDropdown.classList.remove('selected');
    }

    const selectedType = document.querySelector("input[type='radio']:checked");
    if (selectedType) {
      invTypeInput.value = selectedType.value;
    }
  });


  const inputPhone = document.querySelector("#phone");

  const iti = window.intlTelInput(inputPhone, {
    initialCountry: "cz",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.2.19/js/utils.js"
  });



}