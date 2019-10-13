import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Account } from 'src/app/models/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminaccountlist',
  templateUrl: './adminaccountlist.component.html',
  styleUrls: ['./adminaccountlist.component.css']
})
export class AdminaccountlistComponent implements OnInit {

  constructor(private accounts: AccountService) { }

  tempAccountList: Observable<Account[]> = this.accounts.list();
  accountList: Account[];
  currentAccount: Account;
  username: String;

  ngOnInit() {
    //if(this.accountList == null){
      this.getAccountList();
      this.currentAccount = JSON.parse(sessionStorage.getItem("userObj"));
      this.username = this.currentAccount.username;
    //}
  }

  getAccountList(){
    this.tempAccountList.subscribe(
      (response) => {
        console.log(response);
        this.accountList = response;
        this.getActiveAccount();
        //console.log(this.accountList);
      },
      (response) => {
        console.log("Error loading account list.");
      }
    )
  }

  getActiveAccount(){
    //console.log("The active console is " + sessionStorage.getItem('console'));
    var i;
    for (i = 0; i < this.accountList.length; i++) {
      if(this.accountList[i].username == sessionStorage.getItem('username')){
        this.currentAccount = this.accountList[i];
        //console.log(this.currentAccount);
        break;
      }
    } 
  }

  getStatus(status: number){
    switch(status) {
      case -1:
        return("Banned");
      case 1:
        return("Reviewer");
      case 2:
        return("Moderator");
      case 3:
        return("Administrator");
      default:
        console.log(status);
        return("User");
    } 
  }

  updateUser(useri: number, status: string){
    var test = document.getElementById('selector'+useri.toString());
    //var tempAccount = this.accountList[useri];
    // @ts-ignore
    console.log("Value is " + test.value);
    // @ts-ignore
    this.accountList[useri].status = test.value;
    console.log(this.accountList[useri]);

    this.accounts.updateAccount(this.accountList[useri]).subscribe(
      (response) => {
        console.log(response);
        console.log("Put in server")
      },
      (response) => {
        console.log("ERROR");
        console.log(response);
      }
    );

    this.ngOnInit();

  }

}
