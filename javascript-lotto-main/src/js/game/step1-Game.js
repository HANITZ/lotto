import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";
import Ticket from "../Model/Ticket"
const Game = async () => {
  const amountOfBuy = await Ticket.inputMoney()
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
