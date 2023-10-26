class BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    transactions: Transaction[] = [];

    constructor(accountNumber: number, accountHolder: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        this.transactions.unshift({ type: "deposit", amount, timeStamp: new Date() });
        console.log(this.transactions);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.unshift({ type: "withdraw", amount, timeStamp: new Date() });
            console.log(this.transactions);
        } else {
            console.log("You haven't sufficient balance in your account to withdraw.");
        }
    }

    getBalance(): void {
        console.log(this.balance)
    }
}

interface Transaction {
    type: String;
    amount: Number;
    timeStamp: Date;
}


const person = new BankAccount(213456780900089, "Ramesh Kumar", 25000);

person.deposit(120);

person.withdraw(11100);

person.getBalance();
