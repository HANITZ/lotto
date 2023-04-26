import Console from "../util/Console";

const InputView = {
  inputBuyAmount() {
    return Console.readLine("구매할 금액을 입력해주세요\n");
  },

  inputWinningNumbers(){
    return Console.readLine("당첨 번호를 입력해주세요(쉼표로 구분)\n")
  }
  
};

export default InputView;
