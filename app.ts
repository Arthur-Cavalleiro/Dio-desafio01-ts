import { ModAccount } from './class/CheatAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

console.log("+++++++++++++++++PEOPLE ACCOUNT++++++++++++++++++");

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'JONATHAN JOESTAR', 10)

console.log(peopleAccount.getBalance())
console.log(peopleAccount.getDocId())
console.log(peopleAccount.getName())
peopleAccount.deposit(20)
peopleAccount.withdraw(10)

console.log("+++++++++++++++++COMPANY ACCOUNT++++++++++++++++++");

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

console.log(companyAccount.getBalance())
console.log(companyAccount.getName())
companyAccount.deposit(50)
companyAccount.withdraw(30)
companyAccount.getLoan(200)

console.log("+++++++++++++++++HASCKER ACCOUNT++++++++++++++++++");

const modedAccount: ModAccount = new ModAccount('VIEGO HACKER', 777)

console.log(modedAccount.getBalance())
console.log(modedAccount.getName())
modedAccount.deposit(10)
modedAccount.getBalance()
modedAccount.withdraw(10)
