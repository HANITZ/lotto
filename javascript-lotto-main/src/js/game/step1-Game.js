import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";

const Game = async () => {
  const amountOfBuy = await InputView.inputBuyAmount()
  InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.',amountOfBuy)
  const winningNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = [7];

  return {
    amountOfBuy,
    winningNumber,
    bonusNumber,
  };
};

export default  Game;
