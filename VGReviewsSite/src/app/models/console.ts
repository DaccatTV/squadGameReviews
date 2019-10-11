import { Game } from './game';

export class Console{

    c_id: number;
    cname: string;
    games: Game[];

    constructor(c_id:number, cname:string, games:Game[]){

        this.c_id = c_id;
        this.cname = cname;
        this.games = games;
        
    }

}