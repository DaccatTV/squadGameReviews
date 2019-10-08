export class Game{

        g_id: number;
        gname: string;
        overview: string;
        publisher: string;
        esrb: string;

    constructor(g_id:number,gname:string,overview:string,publisher:string,esrb:string){

        this.g_id = g_id;
        this.gname = gname;
        this.overview = overview;
        this.publisher = publisher;
        this.esrb = esrb;
        
    }


}