import InputView from '../../src/js/View/InputView'

describe('InputView 객체 테스트', ()=>{
    
    beforeEach(()=>(
        InputView.inputBuyAmount = jest.fn()
    ))

    test('구매 금액 입력 테스트', async ()=>{
        const amount = await InputView.inputBuyAmount.mockImplementationOnce(()=>100)
        expect(amount()).toEqual(100)
    })
})