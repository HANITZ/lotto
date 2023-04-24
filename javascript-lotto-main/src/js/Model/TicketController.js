import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";

class TicketController {
    #tickets
    constructor(){}
    
    async inputMoney(){
        const amount = await InputView.inputBuyAmount()
        if(InputValidator.validateAmountMoney(amount)){
            return amount
        }
        return this.inputMoney()
    }

    getTickets(money){
        const numberOfTickets = this.moneyToTicket(money)
        
    }

    moneyToTicket(money){
        return money/1000
    }

}



export default TicketController