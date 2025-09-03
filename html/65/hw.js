//1
const createBankAccount = function(){
  return{
    balance: 0,
      

  
    preformTransaction(amount){
      this.balance += amount;
     }
  }
}
const bankAccount1 = createBankAccount();
const bankAccount2 = createBankAccount();
bankAccount1.preformTransaction(30);
bankAccount2.preformTransaction(50);
bankAccount2.preformTransaction(70);
console.log(bankAccount2);
//2
const createBankAccount = function(){
  return{
    balance: 0,
     }
  }
 function transactions(amount){
      this.balance += amount;
      console.log(`balance: ${this.balance} amount: ${amount}`);
    }
const bankAccount1 = createBankAccount();
const bankAccount2 = createBankAccount();
console.log(bankAccount2);
transactions.call(bankAccount1, 5);
transactions.call(bankAccount1, 25);
//transactions.apply(bankAccount2, 98);