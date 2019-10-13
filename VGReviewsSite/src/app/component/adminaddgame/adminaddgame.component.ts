import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsolesService } from 'src/app/service/consoles.service';
import { Console } from 'src/app/models/console';
import { TagsService } from 'src/app/service/tags.service';
import { Tag } from 'src/app/models/tag';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/service/games.service';


@Component({
  selector: 'app-adminaddgame',
  templateUrl: './adminaddgame.component.html',
  styleUrls: ['./adminaddgame.component.css']
})
export class AdminaddgameComponent implements OnInit {

  constructor(private consoles: ConsolesService, private tags: TagsService, private games: GamesService) { }

  game: Game;

  tempConsoleList: Observable<Console[]> = this.consoles.list();
  consoleList: Console[];
  consolesForGame: Console[] = null;

  tempTagList: Observable<Tag[]> = this.tags.list();
  tagList: Tag[];
  tagsForGame: Tag[] = null;

  rGameName: string;
  rGameOverview: string;
  rGamePublisher: string;

  ngOnInit() {
    this.consolesForGame = [];
    this.getConsoleList();
    this.getTagList();
  }

  getConsoleList(){
    this.tempConsoleList.subscribe(
      (response) => {
        console.log(response);
        this.consoleList = response;
        //console.log(this.consoleList);
      },
      (response) => {
        console.log("Error loading console list.");
      }
    )
  }

  getTagList(){
    this.tempTagList.subscribe(
      (response) => {
        console.log(response);
        this.tagList = response;
        //console.log(this.consoleList);
      },
      (response) => {
        console.log("Error loading console list.");
      }
    )
  }

  addConsole(cidt: string){
    var test = document.getElementById(cidt);
    // @ts-ignore
    var cid = Number(test.value);

    console.log("Value is " + cid);
    var canAdd = true;
    if(this.consolesForGame != null){
      console.log("array is not null");
      for(var i=0; i<this.consolesForGame.length; i++){
        //console.log(this.consolesForGame[i]);
        //for(var j=0; j<this.consoleList.length; j++){
          if(this.consolesForGame[i].c_id == this.consoleList[cid].c_id){
            canAdd = false;
            break;
          }
        //}
        if(!canAdd){
          break;
        }
      }
    }else{
      this.consolesForGame = [];
    }

    if(canAdd){
      console.log(this.consoleList[cid]);
      this.consolesForGame.push(this.consoleList[cid]);
      console.log(this.consolesForGame);
    }

  }

  addTag(tidt: string){
    var test = document.getElementById(tidt);
    // @ts-ignore
    var tid = Number(test.value);

    console.log("Value is " + tid);
    var canAdd = true;
    if(this.tagsForGame != null){
      console.log("array is not null");
      for(var i=0; i<this.tagsForGame.length; i++){
        //console.log(this.consolesForGame[i]);
        //for(var j=0; j<this.consoleList.length; j++){
          if(this.tagsForGame[i].t_id == this.tagList[tid].t_id){
            canAdd = false;
            break;
          }
        //}
        if(!canAdd){
          break;
        }
      }
    }else{
      this.tagsForGame = [];
    }

    if(canAdd){
      console.log(this.tagList[tid]);
      this.tagsForGame.push(this.tagList[tid]);
      console.log(this.tagsForGame);
    }

  }

  removeConsole(cid: number){
    this.consolesForGame.splice(cid,1);
  }

  removeTag(tid: number){
    this.tagsForGame.splice(tid,1);
  }

  submitGame(){
    if (this.rGameName == '') {
    }else if (this.rGameOverview == '') {
    }else if (this.rGamePublisher == '') {
    }else{

      var test = document.getElementById("ESRBselector");
      // @ts-ignore
      var esrb = test.value;

      this.game = new Game(-69420, this.rGameName, this.rGameOverview, this.rGamePublisher, esrb, this.consolesForGame, this.tagsForGame, null, null)
      console.log(this.game);

      this.games.addGame(this.game).subscribe(
        (response) => {
          console.log(response);
          console.log("WHY DID I HAVE TO DO THIS?!")
        },
        (response) => {
          console.log(response);
          console.log("ERROR");
        }
      );
    }
  }

}
