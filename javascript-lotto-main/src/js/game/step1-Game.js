import TicketController from "../TicketController";
import LottoMachine from "../Model/LottoMachine"
import InputView from "../View/InputView";
import Console from "../util/Console";
import constants from "../Constants";
import InputValidator from "../Validator/InputValidator";

const Game = () => {
  return {
    async start(){

      const ticketController = new TicketController();
      const lottoMachine = new LottoMachine();

      const amountOfBuy = await ticketController.inputMoney();
      const tickets = ticketController.getTickets(amountOfBuy);
      ticketController.printTickets(tickets)
      const winningNumber = await lottoMachine.getWinningNumbers()
      const bonusNumber = await lottoMachine.getBonusNumber();
      const drawedTickets = lottoMachine.drawLottos(tickets)
      lottoMachine.printWinnedLottos(drawedTickets)
      
      if(await this.gameRestart()){
        await this.start()
      }
      
      Console.close()
    },
    async gameRestart(){
      const input  = await InputView.inputRestart()
      if(!InputValidator.validateInputRestart(input)){
        return this.gameRestart()
      } 
      return await constants.restart[input]
    },

  }
  

};

export default Game;
