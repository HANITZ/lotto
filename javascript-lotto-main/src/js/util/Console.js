const { resolve } = require('path');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const rlconsole = {
    readLine(inputMessage) {
        return new Promise( resolve => {
            rl.question(inputMessage, resolve)
        })
    },
    print(message){
        console.log(message)
    },
    close(){
        rl.close();
    }
}

export default rlconsole;

