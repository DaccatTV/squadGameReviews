export class Message{


    m_id: number;
    f_id: number;
    a_id: number;
    message: string;
    posttime: string;


    constructor(m_id:number,f_id:number,a_id:number,message:string,posttime:string){
        
        this.m_id = m_id;
        this.f_id = f_id;
        this.a_id = a_id;
        this.message = message;
        this.posttime = posttime;

    }

}