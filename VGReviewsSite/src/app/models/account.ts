export class Account {

    a_id :number;
    username :string;
    pass :string;
    status :number;

    constructor(a_id:number,username:string,pass:string,status:number) {

        this.a_id = a_id;
        this.username = username;
        this.pass = pass;
        this.status = status;

    }

}