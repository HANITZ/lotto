import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";
import TicketController from "../Model/TicketController"
import RandomNumberGenerator from "../util/RandomNumberGenerator";
const Game = async () => {
  const ticketController = new TicketController()
  
  const amountOfBuy = await ticketController.inputMoney()
  const tickets = ticketController.getTickets(amountOfBuy)
  console.log(num)

  console.log('받아오기 성공')
  console.log(amountOfBuy)
  const winningNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = [7];

  return {
    amountOfBuy,
    winningNumber,
    bonusNumber,
  };
};

export default  Game;
