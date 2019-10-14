import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Review } from 'src/app/models/review';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-newgamespage',
  templateUrl: './newgamespage.component.html',
  styleUrls: ['./newgamespage.component.css']
})
export class NewgamespageComponent implements OnInit {

  constructor(private reviewservice: ReviewsService) { }

  game: Game;
  reviewList: Review[];
  selectedReview: Review;
  averageRating: number;

  ngOnInit() {
    
    this.game = JSON.parse(sessionStorage.getItem("gameObj"));
    this.reviewList = this.game.reviews;
    
  }

  storeSessionReview(i: number) {
    this.selectedReview = this.reviewList[i];
    sessionStorage.setItem("reviewObj", JSON.stringify(this.selectedReview));
  }

  deleteReview(i: number){
    this.selectedReview = this.reviewList[i];
    this.reviewservice.deleteReview(this.selectedReview).subscribe(
      (response) => {
        console.log("success!");
      },
      (response) => {
        console.log("failure...");
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
