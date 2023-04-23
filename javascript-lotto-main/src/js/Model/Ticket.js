import InputValidator from "../Validator/InputValidator";
import InputView from "../View/InputView";

const Ticket = {
    
    async inputMoney(){
        const amount = await InputView.inputBuyAmount()
        if(InputValidator.validateAmountMoney(amount)){
            return amount/1000
        }
        return this.inputMoney()
    }
}



export default Ticket