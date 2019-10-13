export class Message{

    m_id: number;
    message: string;
    posttime: string;
    messageAccount: Account;

    constructor(m_id:number,message:string,posttime:string,messageAccount:Account){
        
        this.m_id = m_id;
        this.message = message;
        this.posttime = posttime;
        this.messageAccount = messageAccount;

    }

}