function createBanckAccount(accHolder,mobile,email,balance = 0){
  return {
    accountHolder: accHolder,
    mobile: mobile,
    email: email,
    balance: balance,

    deposit(amonut){
      this.balance += amonut;
      console.log(sendDepositEmail.call(this,amount));
    },

    withdraw(amount){
      if(this.balance <=0 || this.balance < amount){
        console.log('Insufficient Ballance');
        console.log(InsufficientFundEmail.call(this, amount));
      }else{
        this.balance -= amount;
        sendWithdrawEmail.call(this,amount);
      }
    },

    checkBalance(){
      console.log(`Your balance is ${this.balanc}`);
    },

    checkBankProfile(){
      console.log(`Account Holder`);
      console.log(`Mobile`);
      console.log(`Email`);
      console.log(`Balance`);
    }
  }
}