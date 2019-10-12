import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accounts: AccountService) { }

  ngOnInit() {
  }

  rUsername :string;
  rPassword :string;
  rConfirmPassword :string;
  account :Account;

  check() {
    if (this.rUsername == '') {
      //return false;
    }else if (this.rPassword == '') {
      //return false;
    }else if (this.rConfirmPassword == '') {
      //return false;
    }else if (this.rPassword != this.rConfirmPassword) {
      //return false;
    }else{
      this.account = new Account(-69420, this.rUsername, this.rPassword, 0, null, null);
      //this.account.username=this.rUsername;
      //this.account.password=this.rPassword;
      //this.account.status=0;

      console.log(this.account);

      this.whyangularwhy();

      //return true;
    }
  }

  whyangularwhy(){
    this.accounts.addAccount(this.account).subscribe(
      (response) => {
        console.log(response);
        console.log("WHY DID I HAVE TO DO THIS?!")
      },
      (response) => {
        console.log(response);
        console.log("ERROR");
      }
    );
  }

}
