import { Account } from './account';
import { Review } from './review';

export class ReviewRating{

    rr_id : number;
    rating : number;
    review : Review;
    account : Account;

    constructor(rating : number, rr_id : number,review:Review, account : Account){
        
        this.rating = rating;
        this.rr_id = rr_id;
        this.review = review;
        this.account = account;

    }

}