import { Review } from './review';
import { Message } from './message';

export class Account {

    a_id :number;
    username :string;
    pass :string;
    status :number;

    constructor(a_id:number,username:string,password:string,status:number) {


        this.a_id = a_id;
        this.username = username;
        this.pass = password;
        this.status = status;
       

    }

}