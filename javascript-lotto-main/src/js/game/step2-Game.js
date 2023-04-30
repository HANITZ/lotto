import LottoMachine from "../Model/LottoMachine";
import TicketController from "../TicketController";
import InputValidator from "../Validator/InputValidator";
import ui from "../View/ui";
import preventFormFromSubmitting from "../util/preventFormFromSubmitting";

const WebGame = () => {
  preventFormFromSubmitting();
  const ticketController = new TicketController();
  const lottoMachine = new LottoMachine();

  function start() {
    bindAllEvents();
  }
  function bindAllEvents() {
    addEvent({
      element: ui().getDomWithName("buyBtn"),
      event: () => buyLotto(),
      type: "click",
    });
    addEvent({element: ui().getDomWithName('resultBtn') , event: ()=>calculateStatistics(), type: 'click' });
    addEvent({element: ui().getDomWithName('retryBtn'), event: () => restartGame(), type: 'click'})
    addEvent({element: ui().getDomWithName('closeModalBtn'), event: () => closeModal(), type: 'click'})
  }

  function restartGame(){
    ui().hideRestUI()
    ui().resetAllInputValues();
    ui().closeModal();
  }
  function closeModal(){
    ui().closeModal()
  }


  function calculateStatistics(){
    const inputNumbers = [...ui().domList.targetNumberInputs]
    const winningNumberInput = [...inputNumbers].map(input => input.value)
    const bonusNumberInput = winningNumberInput.pop();
    try{
        ui().hideTargetNumberValidationText()
        InputValidator.validateInputWinningNumbers(winningNumberInput)
        InputValidator.validateInputBonusNumber(bonusNumberInput, winningNumberInput)
        ui().showFinalResult(lottoMachine.drawLottos(winningNumberInput, bonusNumberInput, ticketController.takeTickets()))

    }catch(error){
        ui().showTargetNumberNvalidationText(error)
    }
  }

  function buyLotto() {
    try {
      ui().hideMoneyValidationText();
      const moneyInput = ui().domList.moneyInput.value;
      InputValidator.validateInputAmountMoney(moneyInput);
      const tickets = ticketController.getTickets(moneyInput);
      ui().showRestUI(tickets);
    } catch (err) {
      ui().showMoneyValidationText(err);
    }
  }
  function addEvent({ element, event, type }) {
    element.addEventListener(type, event);
  }

  return {
    start,
  };
};

export default WebGame;
