import { Game } from './game';

export class Tag{

    t_id: number;
    tname: string;
    games: Game[];

    constructor(t_id:number,tname:string, games:Game[]){

            this.t_id=t_id;
            this.tname = tname;
            this.games = games;

    }

}