import Console from "../util/Console";

const InputView = {
  inputBuyAmount() {
    return Console.readLine("구매할 금액을 입력해주세요\n");
  },
  inputWinningNumbers(){
    return Console.readLine("당첨 번호를 입력해주세요(쉼표로 구분)\n")
  },
  inputBonusNumber(){
    return Console.readLine("보너스 번호를 입력해주세요\n")
  },
  inputRestart(){
    return Console.readLine("게임을 재시작 하시겠습니까?(예:y, 아니오:n)\n")
  },
};

export default InputView;
