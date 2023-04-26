import InputValidator from "../../src/js/Validator/InputValidator"

describe('InputValidator 테스트', ()=>{
    // beforeEach(()=>(
    //     val = InputValidator
    // ))

    test('1000원 단위가 아닌 입력값 Error', ()=>{
        function thousandUnit(){
            InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', 1111)

        }
        // console.log(InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', 1111))
        expect(InputValidator.validatorHandler('1,000원 단위로 주문이 되지 않았습니다.', 1111)).toBe(false)
    })

    test('숫자와 (,)쉼표가 아닌 값이 입력되었습니다.', ()=>{
        expect(InputValidator.validatorHandler('숫자와 (,)쉼표가 아닌 값이 입력되었습니다.', '1,2,3,4,2.,1')).toEqual(false)
    })

    test('범위를 벗어난 숫자가 입력되었습니다.', ()=> {
        expect(InputValidator.checkInputWinNumberRange('1,2,48,2,3')).toBe(false)
    })

    test('숫자가 아닌 값이 입력되었습니다.', ()=>{
        expect(InputValidator.checkNumber('1r')).toBe(false)
    })

    test('y,n 이외의 값 입력', ()=>{
        expect(InputValidator.checkYesOrNo('a')).toBe(false)
    })
})