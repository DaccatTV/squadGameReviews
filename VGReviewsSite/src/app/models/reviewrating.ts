export class ReviewRating{

    rr_id : number;
    rating : number;
    account : Account;

    constructor(rating : number, rr_id : number, account : Account){
        
        this.rating = rating;
        this.rr_id = rr_id;
        this.account = account;

    }

}