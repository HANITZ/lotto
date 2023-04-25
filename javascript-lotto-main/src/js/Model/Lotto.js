import constants from "../Constants"
import RandomNumberGenerator from "../util/RandomNumberGenerator"

class Lotto{

    #lotto

    constructor(){
        this.#lotto = this.makeLotto(new Array())
    }

    makeLotto(lotto){
        let cnt
        while (cnt <constants.lotto.numOf){
            num = RandomNumberGenerator.generateRandomNumber(constants.lotto.min, constants.lotto.max)
            if(!lotto.includes(num)){
                lotto.push(num)
                cnt++
            }
        }
        return lotto
    }
    getLotto(){
        return this.#lotto
    }
}

export default Lotto;