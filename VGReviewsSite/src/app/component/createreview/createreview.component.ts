import { Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/service/reviews.service';
import { Review } from 'src/app/models/review';

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
    a_id : number;
    g_id : number;
    score : number;
  submitReview(){
    this.reviews.addReview(new Review(this.r_id,this.review,this.title,this.a_id,this.g_id,this.score)).subscribe(
    (response) => {
      console.log(response);
    },
    (response) => {
      console.log("Failed.");
    }
  );
}

}
