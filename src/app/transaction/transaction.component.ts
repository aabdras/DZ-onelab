import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../user.service";
import {AppComponent} from "../app.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  amount = 0
  tranfer_to = ''
  sum = 0
  acc = ''
  pin = ''
  date = this.datepipe.transform(new Date(), 'dd/MM/yyyy')
  @Input()
  login: string = 'az';
  @Output() loginChange = new EventEmitter<string>();

  constructor(private userService: UserService, public appCom: AppComponent, private datepipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  log = this.login
  user = this.userService.getData().find(x => x.login == this.appCom.user_acc.login)
  info = this.user!.movements
  movementsDates = this.user!.movementsDates
  movementsType = this.user!.type


  loan(sum: number) {
    // @ts-ignore
    this.user.type.push('DEPOSIT')
    // @ts-ignore
    this.user.movements.push(Number(sum))
    // @ts-ignore
    this.user.movementsDates.push(this.datepipe.transform(new Date(), 'dd/MM/yyyy'))
    //this.movementsType.push('DEPOSIT')
  }

  transfer_money(transfer_to: string, amount: number) {
    let bank_details = this.userService.getData().find(x => x.login == transfer_to)
    if (bank_details == undefined) {
      alert("Пользователь не найден")
    } else {
      // @ts-ignore
      this.user.type.push('WITHDRAWAL')
      // @ts-ignore
      this.user.movements.push(Number('-' + amount))
      // @ts-ignore
      this.user.movementsDates.push(this.datepipe.transform(new Date(), 'dd/MM/yyyy'))

      bank_details.type.push('DEPOSIT')
      bank_details.movements.push(amount)
      bank_details.movementsDates.push(this.datepipe.transform(new Date(), 'dd/MM/yyyy'))
      alert("successfully sent")
    }
  }

  close_account(login: string, password: string) {
    let acc = this.userService.getData().find(x => x.login == login && x.password == password)
    console.log(login)
    if (acc == undefined) {
      alert("аккаунт не найден")
    } else {
      let id = this.userService.getData().indexOf(acc)
      let res = this.userService.getData().splice(id, 1);
      this.appCom.check = false
      this.appCom.text = "Log in to get started"
    }
  }

  balance(): number {
    let totalSum = this.info.reduce((a, b) => a + b, 0)
    return totalSum
  }

}
