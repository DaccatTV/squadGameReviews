import { Review } from './review';
import { Message } from './message';

export class Account {

    id :number;
    username :string;
    password :string;
    status :number;
    reviews :Review[];
    messages :Message[];

    constructor(id:number,username:string,password:string,status:number,reviews:Review[],messages:Message[]) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.status = status;
        this.reviews = reviews;
        this.messages = messages;

    }

}