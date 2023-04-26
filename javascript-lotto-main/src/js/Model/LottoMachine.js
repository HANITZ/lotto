import InputView from "../View/InputView";
import InputValidator from "../Validator/InputValidator";
import constants from "../Constants";

class LottoMachine {
    #winningNumbers
    #bonusNumber

    constructor(){}

    async getWinningNumbers(){
        const stWinningNumbers = await InputView.inputWinningNumbers()
        if(InputValidator.validateInputWinningNumbers(stWinningNumbers)){
            this.#winningNumbers = stWinningNumbers.split(',').map(number=>Number(number)).sort((a,b)=>a-b)
            return 
        }
        await this.getWinningNumbers()
        return this.#winningNumbers
    }

    async getBonusNumber(){
        const stbonusNumber = await InputView.inputBonusNumber();
        if(InputValidator.validateInputBonusNumber(stbonusNumber, this.#winningNumbers)){
            this.#bonusNumber = Number(stbonusNumber)
            return
        }
        await this.getBonusNumber()
        return this.#bonusNumber
    }

    drawLottos(tickets){
        const drawedTickets = tickets.map((ticket)=>{
            const [winned, bonus] = this.matchLottoWithMachine(ticket)
            const winMessage = this.getWinMessage(winned, bonus)
            return [winMessage,winned,bonus]
        })
        return drawedTickets;
    }
    getWinMessage(winned, bonus){
        if(winned.length === 5){
            return constants.winnedLotto[winned.length][bonus>0 ? 1: 0]
        }
        return constants.winnedLotto[winned.length]
    }

    matchLottoWithMachine(ticket){
        const numOfWin = this.matchLottoWithWinNumbers(ticket)
        const numOfBonus = this.matchLottoWithBonusNumber(ticket)
        return [numOfWin, numOfBonus]
    }
    matchLottoWithBonusNumber(ticket){
        return ticket.getLotto().includes(this.#bonusNumber) ? this.#bonusNumber : 0
    }
    matchLottoWithWinNumbers(ticket){
        const numOfMatched = ticket.getLotto().reduce((acc, num)=>{
            for(let winNum of this.#winningNumbers){
                if(winNum > num) return acc
                if(winNum === num){
                    acc.push(num)
                    return acc
                }
            }
            return acc
        }, new Array())
        return numOfMatched
    }


}


export default LottoMachine;