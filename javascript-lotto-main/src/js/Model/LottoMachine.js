import InputView from "../View/InputView";
import InputValidator from "../Validator/InputValidator";

class LottoMachine {
    #winningNumbers
    #bonusNumber

    constructor(){}

    async getWinningNumbers(){
        const stWinningNumbers = await InputView.inputWinningNumbers()
        if(InputValidator.validateInputWinningNumbers(stWinningNumbers)){
            return stWinningNumbers.split(',').map(number=>Number(number))
        }
        await this.getWinningNumbers()

    }

}


export default LottoMachine;