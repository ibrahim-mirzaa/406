console.log("BANK ACCOUNT DEPOSIT AND WITHDRAW TRANSACTIONS ");

function Account() {
    this.balance = 0;

    this.deposit = function (amount) {
        this.balance = this.balance + Number(amount);
        displayBalance(this.balance);
    };

    this.withdraw = function (amount) {
        this.balance = this.balance - amount;
        displayBalance(this.balance);
    };
};

function displayBalance(balance) {
    console.log("Account balance: ", balance);
};

const account = new Account();

const prompt = require("prompt-sync")({ sigint: true });
let amt = prompt("Enter initial deposit amount: ");
account.deposit(amt);
let amt1 = prompt("Enter second deposit amount: ");
account.deposit(amt1);
let amt2 = prompt("Enter amount to withdraw: ");
account.withdraw(amt2);