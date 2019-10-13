import { ReviewRating } from './reviewrating';
import { Account } from './account';
import { Game } from './game';

export class Review{

    r_id : number;
    review : string;
    title : string;
    score : number;
    ratings : ReviewRating[];
    account : Account;
    game : Game;

    constructor(r_id : number, review : string, title : string, score : number, ratings : ReviewRating[], account: Account, game: Game){

        this.r_id = r_id;
        this.review = review;
        this.title = title;
        this.score = score;
        this.ratings = ratings;
        this.game = game;
        this.account= account;

    }

}