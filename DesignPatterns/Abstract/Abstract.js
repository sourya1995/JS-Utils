function HomeLoan(amount, duration){
    this.amount = amount;
    this.interest = 0.08;
    this.duration = duration;
    this.calculateInterest = function (){
        return this.amount * this.interest * this.duration;
    }
}

function StudentLoan(amount, duration){
    this.amount = amount;
    this.interest = 0.03;
    this.duration = duration;
    this.calculateInterest = function(){
        return this.amount * this.interest * this.duration;
    }
}

function PersonalLoan(amount, duration){
    this.amount = amount;
    this.interest = 0.05;
    this.duration = duration;
    this.calculateInterest = function(){
        return this.amount * this.interest * this.duration;
    }
}

function Loans() {
    this.getLoan = function(type, amount, duration){
        var loan;
        switch(type){
            case 'home':
                loan = new HomeLoan(amount, duration)
            case 'student':
                loan = new StudentLoan(amount, duration)
            case 'personal':
                loan = new PersonalLoan(amount, duration)
                break;
            default:
                loan = null;
                break;
        }
        return loan;
    }
}

var loan = new Loans();

var homeLoan = loan.getLoan('home', 3200, 5);
console.log(homeLoan.calculateInterest());

var studentLoan = loan.getLoan('student', 1800, 4);
console.log(studentLoan.calculateInterest());

var personalLoan = loan.getloan('personal',1200,2);
console.log(personalLoan.calculateInterest());