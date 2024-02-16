class Command {
    execute(args) {};
}

class WithdrawAmount extends Command {
    constructor(bankAccount){
        super();
        this.bankAccount = bankAccount;
    }

    execute(args) {
        this.bankAccount.withdrawMoney(args);
    }
}

class CheckAmount extends Command {
    constructor(bankAccount){
        super();
        this.bankAccount = bankAccount;
    }

    execute() {
        this.bankAccount.checkAmount();
    }
}

class DepositAmount extends Command {
    constructor(bankAccount){
        super();
        this.bankAccount = bankAccount;
    }

    execute(args){
        this.bankAccount.depositAmount(args);
    }
}

class AccountManager{
    request(command, args){
        command.execute(args);
    }
}

class BankAccount {
    constructor(amount){
        this.amount = amount;
    }

    checkAmount(){
        console.log(this.amount);
    }

    withdrawMoney(withdrawAmount){
        if(withdrawAmount > this.amount){
            console.log("Not enough money");
        } else {
            this.amount -= withdrawAmount;
        }
    }

    depositAmount(money){
        this.amount += money;
    }
}

const manager = new AccountManager();
const account = new BankAccount(100)
const check = new CheckAmount(account);
manager.request(check)
const withdraw = new WithdrawAmount(account);
const deposit = new DepositAmount(account);
manager.request(withdraw,10)
manager.request(check)
manager.request(deposit,50)
manager.request(check)
