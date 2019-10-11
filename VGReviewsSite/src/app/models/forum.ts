import { Message } from './message';

export class Forum{

    f_id: number;
    title: string;
    posttime: string;
    sticky: number;
    messages: Message[];

    constructor(f_id:number,title:string,posttime:string,sticky:number,messages:Message[]){

        this.f_id = f_id;
        this.title = title;
        this.posttime = posttime;
        this.sticky = sticky;
        this.messages = messages;
        
    }


}