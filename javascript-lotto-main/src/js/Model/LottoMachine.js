import InputView from "../View/InputView";
import InputValidator from "../Validator/InputValidator";

class LottoMachine {
    #winningNumbers
    #bonusNumber

    constructor(){}

    async getWinningNumbers(){
        const stWinningNumbers = await InputView.inputWinningNumbers()
        if(InputValidator.validateInputWinningNumbers(stWinningNumbers)){
            this.#winningNumbers = stWinningNumbers.split(',').map(number=>Number(number))
            return this.#winningNumbers
        }
        await this.getWinningNumbers()
    }

    async getBonusNumber(){
        const stbonusNumber = await InputView.inputBonusNumber();
        if(InputValidator.validateInputBonusNumber(stbonusNumber, this.#winningNumbers)){
            this.#bonusNumber = Number(stbonusNumber)
            return this.#bonusNumber;
        }
        console.log('에러발생')
        await this.getBonusNumber()
    }

}


export default LottoMachine;