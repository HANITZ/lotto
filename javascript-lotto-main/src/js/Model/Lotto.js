import constants from "../Constants"
import RandomNumberGenerator from "../util/RandomNumberGenerator"

class Lotto{

    #lotto

    constructor(){
        this.#lotto = this.makeLotto(new Array())
    }

    makeLotto(lotto){
        let randomNum
        while (lotto.length <constants.lotto.numOf){
            randomNum = RandomNumberGenerator.generateRandomNumber(constants.lotto.min, constants.lotto.max)
            if(!lotto.includes(randomNum)){
                lotto.push(randomNum)
            }
        }
        this.sortAscending(lotto)
        return lotto
    }
    getLotto(){
        return this.#lotto
    }
    sortAscending(arr){
        arr.sort((a,b)=>a-b)
    }
}

export default Lotto;