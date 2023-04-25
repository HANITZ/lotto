import constants from "./Constants";
import InputValidator from "./Validator/InputValidator";
import InputView from "./View/InputView";
import Console from "./util/Console";
import Lotto from "./Model/Lotto";

class TicketController {
  #tickets;
  constructor() {
    this.#tickets = new Array();
  }

  async inputMoney() {
    const amount = await InputView.inputBuyAmount();
    if (InputValidator.validateAmountMoney(amount)) {
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
    return money / constants.lotto.pricePerLotto;
  }
  printTickets(tickets){
    tickets.forEach((ticket)=>{
        Console.print(ticket.getLotto())
    })
  }
}

export default TicketController;
