import { ReviewRating } from './reviewrating';

export class Review{

    r_id : number;
    review : string;
    title : string;
    score : number;
    ratings : ReviewRating[]

    constructor(r_id : number, review : string, title : string, score : number, ratings : ReviewRating[]){

        this.r_id = r_id;
        this.review = review;
        this.title = title;
        this.score = score;
        this.ratings = ratings;

    }

}