import {Component, Input, Output} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService:UserService) {
  }
  title = 'DZ2';
  text="Log in to get started"

  user_acc={
    login: '',
    password: ''
  }
  check=false
  login(){
    var a=this.userService.getData().find(x=>x.login==this.user_acc.login && x.password==this.user_acc.password)
    if(a==undefined){
      alert("аккаунт не найден!!!")
    }
    else {
      this.check=true
      this.text="Hello, "+a.name
    }
  }
  logout(){
    var a=this.userService.getData().find(x=>x.login==this.user_acc.login && x.password==this.user_acc.password)
    if(a==undefined){
      this.text="Log in to get started"
    }
    else {
      this.check=false
      this.text="Log in to get started"
    }
  }
}
