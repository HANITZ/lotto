import constants from "./Constants";
import InputValidator from "./Validator/InputValidator";
import InputView from "./View/InputView";
import Lotto from "./Model/Lotto";

class TicketController {
  #tickets;
  constructor() {
    this.#tickets = new Array();
  }

  async inputMoney() {
    const amount = await InputView.inputBuyAmount();
    if (InputValidator.validateInputAmountMoney(amount)) {
      return amount;
    }
    return this.inputMoney();
  }
  takeTickets(){
    return this.#tickets;
  }
  getTickets(money) {
    let numberOfTickets = this.moneyToTicket(money);
    while (numberOfTickets > 0) {
      this.#tickets.push(new Lotto());
      numberOfTickets--;
    }
    return this.#tickets;
  }

  moneyToTicket(money) {
    return money / constants.lotto.PRICEPERLOTTO;
  }
  printTickets(tickets){
    tickets.forEach((ticket)=>{

    })
  }
}

export default TicketController;
