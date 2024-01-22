import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanWanted: number): boolean => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance() + loanWanted)
      console.log(`Imprestimo adquirido com sucesso, novo saldo de ${this.getBalance()}`);
      
      return true
    }
    return false
  }
}
