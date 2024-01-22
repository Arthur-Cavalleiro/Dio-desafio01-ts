import { DioAccount } from "./DioAccount";

export class ModAccount extends DioAccount {
  constructor(name:string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): boolean => {
    
    if(this.validateStatus()){
      let normalDeposit = this.getBalance() + depositValue
      this.setBalance(normalDeposit + 10)
      console.log(`Deposito hacker feito com sucesso valor de ${depositValue} + 10 conto kaka, Saldo: ${this.getBalance()}`);
      
      return true
    }
    return false
  };
}