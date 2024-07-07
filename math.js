//Task 1
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let one = new Account("123", 1000, "John Smith");
let two = new Account("111", 750, "Jane Doe");

//Task 2
//Add deposit & withdraw functions
Account.prototype.deposit = function(amount) {
    this.balance += amount;
}
Account.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
        console.log("Not enough money in account for this transaction.");
    } else {
        this.balance -= amount;
    }
}
console.log("Current Balance: $", one.balance);
one.deposit(250);
console.log("Current Balance: $", one.balance);
one.withdraw(658);
console.log("Current Balance: $", one.balance);

//Task 3
//Add method to calculate compound interest based on balance and rate
Account.prototype.calculateInterest = function(rate, years) {
    let amount
    for (let y = 1; y <= years; y++) {
        amount = this.balance * Math.pow(1 + rate, y);
    }
    console.log("Your balance with compound interest after", years, "years, will be: $", amount.toFixed(2));
}

one.calculateInterest(0.07, 4);