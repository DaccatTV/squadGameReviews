import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private reviews : ReviewsService) { }

  ngOnInit() {
  }
    title : string;
    score : number;
    rating : number;
    author : string;
    review : string;

  viewReviews(){
    this.reviews.listReviews().subscribe(
      (response)=>{
        console.log(response);
      },
      (response)=>{
        console.log("Error");
      }
    );
  }

}
