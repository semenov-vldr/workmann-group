const popupTypeBtn = document.querySelector("#popup-type-btn");

if (popupTypeBtn) {

  const popupTypeBtnValue = popupTypeBtn.querySelector(".popup-type-btn-value");
  const popupType = document.querySelector(".popup-type");
  const popupTypeList = popupType.querySelectorAll(".popup-type-item");

  const popupTypeBottom = popupType.querySelectorAll(".popup-type__confirm, .popup-type__actions");

  const handlePopupTypeBottom = (isVisible) => {
    popupTypeBottom.forEach(bottomItem => {
      bottomItem.style.display = `${isVisible? "" : "none"}`;
    });
  };

  handlePopupTypeBottom (false);

  const startedType = window.localStorage.getItem('investorType');
  let selectedType;

  function setTypeValue (initialValue) {
    popupTypeList.forEach(typeItem => {
      if (typeItem.dataset.type === initialValue) {
        typeItem.classList.add('js-type-active');
      }
    });
  }

  if (startedType) {
    popupTypeBtnValue.textContent = window.localStorage.getItem('investorType');
    setTypeValue (startedType);
    popupTypeBottom.forEach(bottomItem => bottomItem.style.display = "");
  }

  popupTypeBtn.addEventListener("click", () => {
    popupType.classList.toggle("js-active");
  });

  popupTypeList.forEach(popupTypeItem => {
    popupTypeItem.addEventListener("click", function () {
      popupTypeList.forEach(popupTypeItem => {
        popupTypeItem.classList.remove('js-type-active');
      });

      const dataTypeItem = popupTypeItem.dataset.type;
      window.localStorage.setItem("investorType", dataTypeItem);
      selectedType = window.localStorage.getItem('investorType');
      popupTypeBtnValue.textContent = selectedType;
      setTypeValue (selectedType);
      handlePopupTypeBottom (true);
    });
  });

  const popupTypeBtns = popupType.querySelectorAll(".popup-type__actions button");
  popupTypeBtns.forEach(popupBtn => {
    popupBtn.addEventListener("click", () => {
      popupType.classList.remove("js-active");
    });
  });

}