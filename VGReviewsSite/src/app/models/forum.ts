export class Forum{

    f_id: number;
    g_id: number;
    title: string;
    posttime: string;
    sticky: number;

    constructor(f_id:number,g_id:number,title:string,posttime:string,sticky:number){

        this.f_id = f_id;
        this.g_id = g_id;
        this.title = title;
        this.posttime = posttime;
        this.sticky = sticky;
        
    }


}