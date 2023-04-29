import domList from "./domList";

const ui = {
  showMoneyValidationText({ message }) {
    domList.moneyInputErrorText.innerText = message;
    domList.moneyInputErrorText.classList.remove("hide");
  },

  hideMoneyValidationText() {
    domList.moneyInputErrorText.classList.add("hide");
  },
};

export default ui;