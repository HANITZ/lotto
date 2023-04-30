import createElem from "../util/createElem";
import { $, $$ } from "../util/selector";

function ui() {
  const domList = {
    buyBtn: $(".buy-btn"),
    moneyInput: $(".money-input"),
    moneyInputErrorText: $(".money-input-error-text"),
    mainContainer: $(".main-container"),
    lottoBox: $(".lotto-box"),
    lottoLengthText: $(".lotto-length-text"),
    targetNumberInputs: $$(".square-input"),
    resultBtn: $(".result-btn"),
    targetNumberInputErrorText: $(".target-number-input-error-text"),
    resultModal: $("#myModal"),
    resultTable: $("table"),
    resultTableBody: $("#myTableBody"),
    ropText: $(".rop-text"),
    retryBtn: $(".retry-btn"),
    closeModalBtn: $(".close"),
    allInputs: $$("input"),
  };
  function showMoneyValidationText({ message }) {
    domList.moneyInputErrorText.innerText = message;
    domList.moneyInputErrorText.classList.remove("hide");
  }
  function hideMoneyValidationText() {
    domList.moneyInputErrorText.classList.add("hide");
  }
  function getDomWithName(name) {
    return domList[name];
  }
  function renderLottos(lottos) {
    domList.lottoBox.innerHTML = "";
    lottos.forEach((lotto) => {
      const lottoElement = createElem({
        tagName: "li",
        type: "class",
        name: "lotto-container",
      });
      lottoElement.innerText = `🎟 ${lotto.getLotto().join(", ")}`;
      domList.lottoBox.appendChild(lottoElement);
    });
  }
  function renderLottosLengthText(lottosLength) {
    domList.lottoLengthText.innerText = `총 ${lottosLength}개를 구매하였습니다.`;
  }
  function showRestUI(lottos) {
    domList.mainContainer.classList.remove("hide");
    renderLottosLengthText(lottos.length);
    renderLottos(lottos);
  }
  function hideTargetNumberValidationText() {
    domList.targetNumberInputErrorText.classList.add("hide");
  }
  function showTargetNumberNvalidationText({ message }) {
    domList.targetNumberInputErrorText.innerText = message;
    domList.targetNumberInputErrorText.classList.remove("hide");
  }
  function showModal() {
    domList.resultModal.style.display = "block";
  }
  function closeModal() {
    domList.resultModal.style.display = "none";
  }
  function resetAllInputValues() {
    [...domList.allInputs].forEach((inputEl) => {
      inputEl.value = null;
    });
  }
  function showFinalResult({ ranks, profit }) {

    const resultTemplate = `
          <tr>
            <td>낙첨</td>
            <td>0</td>
            <td>${ranks[0]}개</td>
          </tr>
          <tr>
            <td>3개</td>
            <td>5,000</td>
            <td>${ranks[1]}개</td>
          </tr>
          <tr>
            <td>4개</td>
            <td>5,0000</td>
            <td>${ranks[2]}개</td>
          </tr>
          <tr>
            <td>5개</td>
            <td>150,000,000</td>
            <td>${ranks[3]}개</td>
          </tr>
          <tr>
            <td>5개+보너스볼</td>
            <td>30,000,000</td>
            <td>${ranks[4]}개</td>
          </tr>
          <tr>
            <td>6개</td>
            <td>2,000,000,000</td>
            <td>${ranks[5]}개</td>
          </tr>
    `;
    domList.resultTableBody.innerHTML = resultTemplate;
    domList.ropText.innerText = `당신의 총 수익률은 ${profit.toFixed(
      1
    )}%입니다.`;

    showModal();
  }
  function hideRestUI(){
    domList.mainContainer.classList.add('hide');
  }

  return {
    showMoneyValidationText,
    hideMoneyValidationText,
    getDomWithName,
    renderLottos,
    renderLottosLengthText,
    showRestUI,
    hideTargetNumberValidationText,
    showTargetNumberNvalidationText,
    showModal,
    closeModal,
    resetAllInputValues,
    showFinalResult,
    domList,
    hideRestUI,
  };
}

export default ui;
