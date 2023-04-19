import Game from "../src/js/game/step1-Game"

describe('Game 함수 테스트', ()=>{
    let game
    beforeEach(()=>(
        game = Game()
    ))
    
    test('Game 함수가 실행이 되면서 6개의 로또 번호를 가져옴 ', () => {
        console.log(game)
        const winningNumber = game.winningNumber
        expect(winningNumber.length).toEqual(6)
    })

    test('Game 함수가 실행이 되면서 하나의 보너스 번호를 가져옴', () => {
        const bonusNumber = game.bonusNumber
        expect(bonusNumber.length).toEqual(1)
    })

})