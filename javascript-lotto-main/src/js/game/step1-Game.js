import TicketController from "../TicketController";
import LottoMachine from "../Model/LottoMachine"

const Game = async () => {
  const ticketController = new TicketController();
  const lottoMachine = new LottoMachine();

  const amountOfBuy = await ticketController.inputMoney();
  const tickets = ticketController.getTickets(amountOfBuy);
  ticketController.printTickets(tickets)
  const winningNumber = await lottoMachine.getWinningNumbers()
  const bonusNumber = await lottoMachine.getBonusNumber();
  console.log(winningNumber, bonusNumber)

  console.log("받아오기 성공");
  // console.log(amountOfBuy);

  


  return {

  };
};

export default Game;
