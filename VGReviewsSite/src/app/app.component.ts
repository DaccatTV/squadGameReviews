import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.getStatus();
  }
  title = 'VGReviewsSite';
  //currentAccount = JSON.parse(sessionStorage.getItem("userObj"));

  getStatus(){
    var temp = sessionStorage.getItem("userObj");
    if(temp!=null){

    //console.log("The account name is: " + temp.username);
    //console.log("The account status is: " + temp.status);
    console.log(JSON.parse(temp).status);
    return JSON.parse(temp).status;
    }
    return null;
  }

  refresh(){
    
  }
}
