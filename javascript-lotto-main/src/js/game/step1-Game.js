import TicketController from "../TicketController";
import Lotto from "../Model/Lotto"
import LottoMachine from "../Model/LottoMachine"

const Game = async () => {
  const ticketController = new TicketController();
  const lottoMachine = new LottoMachine();

  const amountOfBuy = await ticketController.inputMoney();
  console.log(1)
  const tickets = ticketController.getTickets(amountOfBuy);
  ticketController.printTickets(tickets)
  const winningNumber = await lottoMachine.getWinningNumbers()
  console.log(winningNumber)
  console.log("받아오기 성공");
  console.log(amountOfBuy);

  


  return {
    amountOfBuy,
    winningNumber,
    bonusNumber,
  };
};

export default Game;
