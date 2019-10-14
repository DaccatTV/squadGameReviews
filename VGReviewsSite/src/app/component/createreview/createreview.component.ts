import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';
import { Review } from 'src/app/models/review';
import { ReviewRating } from 'src/app/models/reviewrating';
import { Game } from 'src/app/models/game';
import { Account } from 'src/app/models/account';
import { Session } from 'protractor';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent implements OnInit {

  constructor(private reviews : ReviewsService) { }
  ngOnInit() {
  }
    r_id : number;
    review : string;
    title : string;
    score : number;
    ratings: ReviewRating[];
    game: Game;
    account : Account;
  submitReview(){

    //@ts-ignore
    this.title = document.getElementById('rtitle').value;
    //@ts-ignore
    this.review = document.getElementById('review').value;
    //@ts-ignore
    var nums = document.getElementById('rscore').value;
  
    this.score = parseInt(nums);


    var game_idstring = sessionStorage.getItem('gameObj');
    var useraccountstring = sessionStorage.getItem('userObj');

    this.account = JSON.parse(useraccountstring);
    this.game = JSON.parse(game_idstring);

    console.log("getting vals, boss");
    
    console.log(this.account);
    console.log(this.game);
    console.log("done getting the vals");

  this.reviews.addReview(new Review(this.r_id, this.review,this.title,this.score,this.ratings,this.account,this.game)).subscribe(
    (response) => {
      console.log("response from addReview " + response);
    },
    (response) => {
      console.log("Failed.");
    }
  );
}

getStatus(){
  var temp = sessionStorage.getItem("userObj");
  if(temp!=null){

  console.log(JSON.parse(temp).status);
  return JSON.parse(temp).status;
  }
  return null;
}

}
