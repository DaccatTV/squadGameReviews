import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accounts :AccountService) { }

  ngOnInit() {
  }

  rUsername :string;
  rPassword :string;

  account;

  checkLogin() {
    console.log("Starting verification");

    if (this.rUsername == '') {
      return false;
    }
    if (this.rPassword == '') {
      return false;
    }

    this.account = this.accounts.getAccount(this.rUsername);

    if(this.account == null){
      console.log("Account Null");
    }else{
      //console.log(this.account);
      this.account.subscribe(
        (response) => {
          console.log(response);
          this.account = response;
        },
        (response) => {
          console.log("ERROR");
        }
      )

        if(this.account.password!=this.rPassword){
          this.account==null;
          return false;
        }

        sessionStorage.setItem('username', this.rUsername);
        sessionStorage.setItem('password', this.rPassword);

    }

  }

}
