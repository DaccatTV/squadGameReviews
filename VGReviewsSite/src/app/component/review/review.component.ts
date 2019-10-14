import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';
import { Review } from 'src/app/models/review';
import { ReviewRating } from 'src/app/models/reviewrating';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private reviews : ReviewsService) { }

  ngOnInit() {
    if(sessionStorage.getItem("reviewObj")!=null){
    this.reviewObj = JSON.parse(sessionStorage.getItem("reviewObj"));
    this.title = this.reviewObj.title;
    this.score = this.reviewObj.score;
    this.ratings = this.reviewObj.ratings;
    this.review = this.reviewObj.review;
    this.author = this.reviewObj.account.username;
    this.rating = 2.5;
    if(this.ratings.length != 0){
      for(let entry of this.ratings){
        this.rating += entry.rating;
      }
      this.rating = this.rating/this.ratings.length;
      }
    }
  }
    reviewObj:Review;
    title : string;
    score : number;
    ratings : ReviewRating[];
    rating: number;
    author : string;
    review : string;

}
