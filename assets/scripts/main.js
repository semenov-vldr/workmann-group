"use strict";
"use strict";

var feedback = document.querySelector(".feedback");
if (feedback) {
  var formGroupDropdown = document.querySelector(".form__group--dropdown");
  var invTypeInput = document.querySelector("#inv-type");
  var dropdown = document.querySelector(".form__dropdown");
  invTypeInput.addEventListener("click", function () {
    dropdown.classList.add('visible');
    formGroupDropdown.classList.add('selected');
  });
  document.addEventListener("click", function (evt) {
    if (evt.target !== invTypeInput) {
      dropdown.classList.remove('visible');
      formGroupDropdown.classList.remove('selected');
    }
    var selectedType = document.querySelector("input[type='radio']:checked");
    if (selectedType) {
      invTypeInput.value = selectedType.value;
    }
  });
  var inputPhone = document.querySelector("#phone");
  var iti = window.intlTelInput(inputPhone, {
    initialCountry: "cz",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.2.19/js/utils.js"
  });
}
"use strict";

function mobileFooterNav() {
  var footer = document.querySelector("footer.footer");
  if (!footer) return;
  var footerNavs = footer.querySelectorAll(".footer-nav");
  footerNavs.forEach(function (footerNav) {
    var footerTitle = footerNav.querySelector(".footer__title");
    footerTitle.addEventListener("click", function () {
      footerTitle.classList.toggle("js-mobile-nav-open");
    });
  });
}
mobileFooterNav();
"use strict";
"use strict";

var popupTypeBtn = document.querySelector(".popup-type-btn");
if (popupTypeBtn) {
  var setTypeValue = function setTypeValue(initialValue) {
    popupTypeList.forEach(function (typeItem) {
      if (typeItem.dataset.type === initialValue) {
        typeItem.classList.add('js-type-active');
      }
    });
  };
  var popupTypeBtnValue = popupTypeBtn.querySelector(".popup-type-btn-value");
  var popupType = document.querySelector(".popup-type");
  var popupTypeList = popupType.querySelectorAll(".popup-type-item");
  var popupTypeBottom = popupType.querySelectorAll(".popup-type__confirm, .popup-type__actions");
  var handlePopupTypeBottom = function handlePopupTypeBottom(isVisible) {
    popupTypeBottom.forEach(function (bottomItem) {
      bottomItem.style.display = "".concat(isVisible ? "" : "none");
    });
  };
  handlePopupTypeBottom(false);
  var startedType = window.localStorage.getItem('investorType');
  var selectedType;
  if (startedType) {
    popupTypeBtnValue.textContent = window.localStorage.getItem('investorType');
    setTypeValue(startedType);
    popupTypeBottom.forEach(function (bottomItem) {
      return bottomItem.style.display = "";
    });
  }
  popupTypeBtn.addEventListener("click", function () {
    popupType.classList.toggle("js-active");
  });
  popupTypeList.forEach(function (popupTypeItem) {
    popupTypeItem.addEventListener("click", function () {
      popupTypeList.forEach(function (popupTypeItem) {
        popupTypeItem.classList.remove('js-type-active');
      });
      var dataTypeItem = popupTypeItem.dataset.type;
      window.localStorage.setItem("investorType", dataTypeItem);
      selectedType = window.localStorage.getItem('investorType');
      popupTypeBtnValue.textContent = selectedType;
      setTypeValue(selectedType);
      handlePopupTypeBottom(true);
    });
  });
  var popupTypeBtns = popupType.querySelectorAll(".popup-type__actions button");
  popupTypeBtns.forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function () {
      popupType.classList.remove("js-active");
    });
  });
}