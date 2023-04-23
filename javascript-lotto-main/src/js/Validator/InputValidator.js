import Console from "../util/Console"


const InputValidator = {
    validatorHandler(msg, input) {
        try{
            switch (msg) {
                case '1,000원 단위로 주문이 되지 않았습니다.' :
                    if(!this.checkThousandUnit(input)){
                        throw new Error('1,000원 단위로 주문이 되지 않았습니다.')
                    }
                case '1,000원 미만의 금액이 입력되었습니다.':
                    if(!this.checkHigherThanThousand(input)){
                        throw new Error('1,000원 미만의 금액이 입력되었습니다.')
                    }
                case '숫자가 아닌 값이 입력되었습니다.':
                    if(!this.checkNumber(input)){
                        throw new Error('숫자가 아닌 값이 입력되었습니다.')
                    }
            }
        } catch (err) {
            Console.print(err.message)
        }
    },
    checkNumber(input){
        return /^[1-9]\d*$/g.test(input)
    },
    checkThousandUnit(input){
        if(input%1000 === 0){
            return true
        }
        return false
    },
    checkHigherThanThousand(input){
        if(input>=1000){
            return true 
        }
        return false
    },
}


export default InputValidator;