import { Review } from './review';
import { Forum } from './forum';
import { Tag } from './tag';

export class Game{

    g_id: number;
    gname: string;
    overview: string;
    publisher: string;
    esrb: string;
    console : Console[];
    tags : Tag[];
    forumList : Forum[];
    reviews : Review[];

    constructor(g_id:number,gname:string,overview:string,publisher:string,esrb:string, console: Console[], tags:Tag[], forumList: Forum[], reviews: Review[]){

        this.g_id = g_id;
        this.gname = gname;
        this.overview = overview;
        this.publisher = publisher;
        this.esrb = esrb;
        this.console = console;
        this.tags = tags;
        this.forumList = forumList;
        this.reviews = reviews;
        
    }


}