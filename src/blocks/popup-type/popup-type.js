const popupTypeBtn = document.querySelector(".popup-type-btn");

if (popupTypeBtn) {

  //window.localStorage.clear();

  const popupTypeBtnValue = popupTypeBtn.querySelector(".popup-type-btn-value");
  const popupType = document.querySelector(".popup-type");
  const popupTypeList = popupType.querySelectorAll(".popup-type-item");

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
      //this.classList.add('js-type-active');

      setTypeValue (selectedType);
    });
  });
}