"use strict";
"use strict";

var feedback = document.querySelector(".feedback");
if (feedback) {
  var invTypeInput = document.querySelector("#inv-type");
  var dropdown = document.querySelector(".form__dropdown");
  invTypeInput.addEventListener("click", function () {
    dropdown.classList.add('visible');
  });
  document.addEventListener("click", function (evt) {
    if (evt.target !== invTypeInput) {
      dropdown.classList.remove('visible');
    }
    var selectedType = document.querySelector("input[type='radio']:checked");
    if (selectedType) {
      invTypeInput.value = selectedType.value;
    }
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