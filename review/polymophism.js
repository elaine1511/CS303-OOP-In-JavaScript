/*
In a company, employees may have multiple bank accounts: zero or more savings accounts and zero or more checking accounts. 
Each checking account has an account id, a balance, and a monthly fee. 
Each savings account has an account id, a balance, and an interest rate associated with the particular type of savings account. 
It is possible to read the current balance in any of these accounts, but it is also possible to determine the balance after interest or monthly fee is applied by calling the computeUpdatedBalance method on the account.
The method computeUpdatedBalance in CheckingAccount does the following computation to obtain the return value:
balance – monthlyFee
The method computeUpdatedBalance in SavingsAccount performs the following computation to obtain the return value:
balance + (interestRate * balance)

class Employee:
properties:
name: employee name
accounts: an array holds employee's checking account and savings account
methods:
addAccount(account): add account to accounts array
computeUpdatedBalanceSum(): return the total balance of employee's accounts with updated balance. The updated balance is computed in each account's computeUpdatedBalance().

After you implement the class above, we can use it as below:

*/
class Account {
    constructor(accountId, balance){
        this.accountId=accountId;
        this.balance=balance;
    }
    computeUpdatedBalance(){
        return this.balance;
    }
}
class CheckingAccount extends Account{
    constructor(accountId,balance,monthlyFee){
        super(accountId,balance);
        this.monthlyFee=monthlyFee;
    }
    computeUpdatedBalance(){
        return this.balance-this.monthlyFee;
    }
}
class SavingsAccount extends Account{
    constructor(accountId,balance,intersetRate){
        super(accountId,balance);
        this.intersetRate=intersetRate;
    }
    computeUpdatedBalance(){
        return this.balance*(1+this.intersetRate);
    }
}
class Employee {
    constructor(name){
        this.name=name;
        this.accounts=[];
    }
    addAccount(account){
        return this.accounts.push(account);

    }
    computeUpdatedBalanceSum(){
        return this.accounts.reduce((sum,item)=>sum+item.computeUpdatedBalance(),0);
    }
}

const emp = new Employee('Tina');
emp.addAccount(new CheckingAccount(1001, 5000.00, 25));
emp.addAccount(new CheckingAccount(1002, 2000.00, 25));
emp.addAccount(new SavingsAccount(8001, 30000.00, 0.02));
emp.addAccount(new SavingsAccount(8002, 50000.00, 0.04));
console.log(emp.computeUpdatedBalanceSum()); //Expected Result: 89550
