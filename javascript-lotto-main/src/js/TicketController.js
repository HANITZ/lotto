import constants from "./Constants";
import InputValidator from "./Validator/InputValidator";
import InputView from "./View/InputView";
import rlconsole from "./util/Console";
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
        rlconsole.print(ticket.getLotto())
    })
  }
}

export default TicketController;
