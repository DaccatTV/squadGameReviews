import { Forum } from './forum';

export class Message{

    m_id: number;
    message: string;
    posttime: string;
    messageAccount: Account;
    forum: Forum;

    constructor(m_id:number,message:string,posttime:string,messageAccount:Account,messageForum:Forum){
        
        this.m_id = m_id;
        this.message = message;
        this.posttime = posttime;
        this.messageAccount = messageAccount;
        this.forum = messageForum;

    }

}