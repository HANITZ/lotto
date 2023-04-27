import constants from "../Constants"
import rlconsole from "../util/Console"


const InputValidator = {
    validatorHandler(msg, input, ...args) {
        try{
            switch (msg) {
                case '1,000원 단위로 주문이 되지 않았습니다.' :
                    if(!this.checkThousandUnit(input)){
                        throw new Error('1,000원 단위로 주문이 되지 않았습니다.')
                    }
                    return true
                case '1,000원 미만의 금액이 입력되었습니다.':
                    if(!this.checkHigherThanThousand(input)){
                        throw new Error('1,000원 미만의 금액이 입력되었습니다.')
                    }
                    return true
                case '숫자가 아닌 값이 입력되었습니다.':
                    if(!this.checkNumber(input)){
                        throw new Error('숫자가 아닌 값이 입력되었습니다.')
                    }
                    return true
                case '숫자와 (,)쉼표가 아닌 값이 입력되었습니다.':
                    if(!this.checkNumberAndRest(input)){
                        throw new Error('숫자와 (,)쉼표가 아닌 값이 입력되었습니다.')
                    }
                    return true
                case '범위를 벗어난 숫자가 입력되었습니다.':
                    if(!this.checkInputWinNumberRange(input)){
                        throw new Error('범위를 벗어난 숫자가 입력되었습니다.')
                    }
                    return true
                case '중복된 숫자가 입력되었습니다.':
                    if(!this.checkInputDuplicateWinNumber(input)){
                        throw new Error(msg)
                    }
                    return true
                case '당첨 번호 수가 일치하지 않습니다.':
                    if(!this.checkInputNumberOfWin(input)){
                        throw new Error('당첨 번호 수가 일치하지 않습니다.')
                    }
                    return true
                case '당첨번호와 중복됩니다.':
                    if(this.checkInputBonusNumDuplicateWithWinNumbers(input, ...args)){
                        throw new Error('당첨번호와 중복됩니다.')
                    }
                    return true
                case 'y,n 으로 입력해주세요.':
                    if(!this.checkYesOrNo(input)){
                        throw new Error('y,n 으로 입력해주세요.')
                    }
                    return true
            }
        } catch (err) {
            rlconsole.print(err.message)
            return false
        }
    },
    checkYesOrNo(input){
        if(constants.regex.ISYESORNO.test(input)){
            return true
        }
        return false
    },
    validateInputRestart(input){
        if(!this.validatorHandler('y,n 으로 입력해주세요.', input)){
            return false
        }
        return true
    },
    checkInputBonusNumDuplicateWithWinNumbers(input, winningNumbers){
        return winningNumbers.includes(Number(input))
    },
    validateInputBonusNumber(input, winningNumber){
        if(!this.validatorHandler('숫자가 아닌 값이 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('범위를 벗어난 숫자가 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('당첨번호와 중복됩니다.', input, winningNumber)){
            return false
        }
        return true
    },

    validateInputWinningNumbers(input){
        if(!this.validatorHandler('숫자와 (,)쉼표가 아닌 값이 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('당첨 번호 수가 일치하지 않습니다.', input)){
            return false
        }
        if(!this.validatorHandler('범위를 벗어난 숫자가 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('중복된 숫자가 입력되었습니다.', input)){
            return false
        }
        return true
    },
    checkInputNumberOfWin(input){
        return input.split(',').length === constants.lotto.NUMOF
    },
    checkInputDuplicateWinNumber(input){
        let winningNumbers = input.split(',')
        return winningNumbers.length === new Set(winningNumbers).size
    },
    checkNumberAndRest(input){
        return constants.regex.ISALLNUMBERANDREST.test(input)
    },
    validateInputAmountMoney(input){
        if(!this.validatorHandler('숫자가 아닌 값이 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('1,000원 미만의 금액이 입력되었습니다.', input)){
            return false
        }
        if(!this.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', input)){
            return false
        }
        return true;
    },

    checkInputWinNumberRange(input){
        for(let number of input.split(',')){
            if(Number(number)<constants.lotto.MIN || Number(number)>constants.lotto.MAX){
                return false
            }
        }
        return true
    },
    checkNumber(input){
        return constants.regex.ISALLNUMBER.test(input)
    },
    checkThousandUnit(input){
        if(input%constants.lotto.PRICEPERLOTTO === 0){
            return true
        }
        return false
    },
    checkHigherThanThousand(input){
        if(input>=constants.lotto.MINPRICE){
            return true 
        }
        return false
    },
}


export default InputValidator;