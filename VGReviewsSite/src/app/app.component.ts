import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  title = 'VGReviewsSite';
  currentAccount = JSON.parse(sessionStorage.getItem("userObj"));

  getStatus(){
    var temp = JSON.parse(sessionStorage.getItem("userObj"));
    console.log("The account name is: " + temp.username);
    console.log("The account status is: " + temp.status);
    //console.log();
    return temp.status;
  }

  refresh(){
    
  }
}
