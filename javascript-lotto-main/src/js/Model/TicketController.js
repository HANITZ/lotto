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
}

// const Ticket = {  
//     async inputMoney(){
//         const amount = await InputView.inputBuyAmount()
//         if(InputValidator.validateAmountMoney(amount)){
//             return amount/1000
//         }
//         return this.inputMoney()
//     }
// }

export default TicketController