import { PeopleAccount } from "./class/PeopleAccount.ts";
import { CompanyAccount } from "./class/CompanyAccount.ts";
import { InvestAccount} from "./class/InvestAccount.ts"

const peopleAccount: PeopleAccount = new PeopleAccount(1098725, "Marina", 123456, 120, true)
// Withdraw
peopleAccount.setStatus(true)
console.log("Conta ativa: " + peopleAccount.getStatus())
console.log("Before withdrawing balance: " + peopleAccount.getBalance());
peopleAccount.withdraw(20);
console.log("After withdrawing balance: " + peopleAccount.getBalance())

// Deposit
peopleAccount.setStatus(true)
console.log("Conta ativa: " + peopleAccount.getStatus())
console.log("Before depositing balance: " + peopleAccount.getBalance());
peopleAccount.deposit(50);
console.log("After depositing balance: " + peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2131, 0, true)
// Loan
companyAccount.setStatus(true)
console.log("Conta ativa: " + companyAccount.getStatus())
console.log("Before loan balance: " + companyAccount.getBalance())
companyAccount.getLoan(788)
console.log("After loan balance: " + companyAccount.getBalance())

const investAccount = new InvestAccount("Charles", 212311, 2100, true)
// Investment
investAccount.setStatus(true)
console.log("Account active: " + investAccount.getStatus())
console.log("Hello, " + investAccount.getName() + "!")
investAccount.setName("Doctor Charius")
console.log("Hello, " + investAccount.getName() + "!")
console.log("Balance before deposit: " + investAccount.getBalance())
investAccount.Deposit(50)
console.log("Balance after deposit: " + investAccount.getBalance())
