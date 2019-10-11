import { Review } from './review';
import { Forum } from './forum';

export class Game{

    g_id: number;
    gname: string;
    overview: string;
    publisher: string;
    esrb: string;
    reviews : Review[];
    forumList : Forum[];

    constructor(g_id:number,gname:string,overview:string,publisher:string,esrb:string, forumList:Forum[],reviews:Review[]){

        this.g_id = g_id;
        this.gname = gname;
        this.overview = overview;
        this.publisher = publisher;
        this.esrb = esrb;
        this.forumList = forumList;
        this.reviews = reviews;
        
    }


}