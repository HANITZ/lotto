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

    drawLottos(win, bo, tickets){
        this.#winningNumbers=win
        this.#bonusNumber = bo
        const drawedTickets = tickets.map((ticket)=>{
            const [winned, bonus] = this.matchLottoWithMachine(ticket)
            return [winned,bonus]
        })
        const ranks = this.getRanks(drawedTickets)
        const profit = this.getProfit(ranks)
        return {ranks,profit}
    }
    getRanks(drawedTickets){
        const acc = new Array(6).fill(0)
        drawedTickets.forEach(([win, bonus])=>{

            if(win == 3){
                acc[1]+=1
            }else if(win ==4){
                acc[2]+=1
            }else if(win ==5){
                if(bonus == 0){
                    acc[3]+=1
                }else{
                    acc[4]+=1
                }
            }else if(win == 6){
                acc[5]+=1
            }else{
                acc[0]+=1
            }
        })
        return acc
    }
    getProfit(ranks){
        let money = 0
        money += ranks[1]*5000
        money += ranks[2]*50000
        money += ranks[3]*1500000
        money += ranks[4]*30000000
        money += ranks[5]*200000000
        const numOfTicket = ranks.reduce((acc,num)=>acc+num,0)
        return money/(numOfTicket*1000)*100
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
        return ticket.getLotto().includes(this.#bonusNumber) ? 1 : 0
    }
    matchLottoWithWinNumbers(ticket){
        const numOfMatched = ticket.getLotto().reduce((acc, num)=>{
            for(let winNum of this.#winningNumbers){
                if(winNum > num) return acc
                if(Number(winNum) === num){
                    acc+=1
                    return acc
                }
            }
            return acc
        }, 0)
        return numOfMatched
    }

    printWinnedLottos(tickets){
        tickets.forEach(([msg,winned,bonus])=>{
        })
    }


}


export default LottoMachine;