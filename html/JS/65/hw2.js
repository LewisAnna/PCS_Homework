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