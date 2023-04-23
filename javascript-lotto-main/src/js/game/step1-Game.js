import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";
import TicketController from "../Model/TicketController"
const Game = async () => {
  const ticketController = new TicketController()
  
  const amountOfBuy = await ticketController.inputMoney()

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
