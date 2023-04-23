import InputValidator from "../../src/js/Validator/InputValidator"

describe('InputValidator 테스트', ()=>{
    // beforeEach(()=>(
    //     val = InputValidator
    // ))

    test('1000원 단위가 아닌 입력값 Error', ()=>{
        function thousandUnit(){
            InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', 1111)

        }
        console.log(InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', 1111))
        expect(thousandUnit).toBe('1,000원 단위로 주문이 되지 않았습니다.')
    })
})