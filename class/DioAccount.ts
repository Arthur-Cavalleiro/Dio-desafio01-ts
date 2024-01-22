export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (newBalance: number): void => {
    this.balance = newBalance
  }
  
  deposit = (depositValue: number): boolean => {
    if(this.validateStatus()){
      this.setBalance(this.balance + depositValue);
      console.log(`Valor depositado, Saldo: ${this.balance}`)
      return true;
    }
    console.log(`Sua conta esta inativa`)
    return false;
  }

  withdraw = (withdrawValue: number): boolean => {
    if(this.validateStatus() && withdrawValue < this.balance){
      this.setBalance(this.balance - withdrawValue);
      console.log(`Você sacou o valor de ${withdrawValue}, seu saldo é de ${this.balance}.`)
      return true;
    }
    console.log(`Erro sua conta esta inativa ou o saldo insuficiente, Saldo ${this.balance}`)
    return false;
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida')
  }
}
