import { Review } from './review';
import { Message } from './message';

export class Account {

    a_id :number;
    username :string;
    pass :string;
    status :number;
    reviews :Review[];
    messages :Message[];

    constructor(id:number,username:string,password:string,status:number,reviews:Review[],messages:Message[]) {

        this.a_id = id;
        this.username = username;
        this.pass = password;
        this.status = status;
        this.reviews = reviews;
        this.messages = messages;

    }

}