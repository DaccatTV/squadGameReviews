import { Component, OnInit } from '@angular/core';
import { ReviewratingsService } from 'src/app/service/reviewratings.service';
import { ReviewRating } from 'src/app/models/reviewrating';
import { Account } from 'src/app/models/account';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-ratereview',
  templateUrl: './ratereview.component.html',
  styleUrls: ['./ratereview.component.css']
})
export class RatereviewComponent implements OnInit {

  constructor(private ratings : ReviewratingsService) { }

  ngOnInit() {
  }
  account:Account;
  review:Review;
  rating:number;
  rr_id:number;

  viewRatings(){
    this.ratings.listRatings().subscribe(
      (response)=>{
        console.log(response);
      },
      (response)=>{
        console.log("Error");
      }
    );
  }
  addRating(){
    this.account = JSON.parse(sessionStorage.getItem("userObj"));
    this.review = JSON.parse(sessionStorage.getItem("reviewObj"));
    //@ts-ignore
    this.rating = document.getElementById("rating").value;
    this.rr_id = 0;
  this.ratings.addRating(new ReviewRating(this.rating, this.rr_id, this.review, this.account)).subscribe(
    (response) => {
      console.log("response from addReview " + response);
    },
    (response) => {
      console.log("Failed.");
    }
  );
  }
}
