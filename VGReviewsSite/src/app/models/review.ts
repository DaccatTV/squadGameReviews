export class Review{

    r_id : number;
    review : string;
    title : string;
    a_id : number;
    g_id : number;
    score : number;


    constructor(r_id : number, review : string, title : string, a_id : number, g_id : number, score : number){
        this.r_id = r_id;
        this.review = review;
        this.title = title;
        this.a_id = a_id;
        this.g_id = g_id;
        this.score = score;
    }


}