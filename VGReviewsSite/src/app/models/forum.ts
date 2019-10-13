import { Message } from './message';
import { Game } from './game';

export class Forum{

    f_id: number;
    title: string;
    posttime: string;
    sticky: number;
    forumgame : Game;
    messages: Message[];

    constructor(f_id:number,title:string,posttime:string,sticky:number,messages:Message[], forumgame:Game){

        this.f_id = f_id;
        this.title = title;
        this.posttime = posttime;
        this.sticky = sticky;
        this.messages = messages;
        this.forumgame = forumgame;
        
    }


}