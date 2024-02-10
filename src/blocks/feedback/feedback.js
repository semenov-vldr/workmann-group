const feedback = document.querySelector(".feedback");

if (feedback) {

  const invTypeInput = document.querySelector("#inv-type");
  const dropdown = document.querySelector(".form__dropdown");

  invTypeInput.addEventListener("click", () => {
    dropdown.classList.add('visible');
  })

  document.addEventListener("click", (evt) => {
    if (evt.target !== invTypeInput) {
      dropdown.classList.remove('visible');
    }

    const selectedType = document.querySelector("input[type='radio']:checked");
    if (selectedType) {
      invTypeInput.value = selectedType.value
    }

  })
}