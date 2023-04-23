import Console from "../util/Console";

const InputView = {
  inputBuyAmount() {
    return Console.readLine("구매할 금액을 입력해주세요\n");
  },
};

export default InputView;
