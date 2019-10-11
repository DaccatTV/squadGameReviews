export class Message{

    m_id: number;
    message: string;
    posttime: string;

    constructor(m_id:number,message:string,posttime:string){
        
        this.m_id = m_id;
        this.message = message;
        this.posttime = posttime;

    }

}