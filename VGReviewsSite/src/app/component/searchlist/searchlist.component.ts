import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { Tag } from 'src/app/models/tag';
import { isUndefined } from 'util';
import { TagsService } from 'src/app/service/tags.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {

  constructor(private games: GamesService, private tags: TagsService) { }

  tempGameList: Observable<Game[]> = this.games.getListGames();
  gameList: Game[] = [];
  gamesForList: Game[] = [];

  tempTagList: Observable<Tag[]> = this.tags.list();
  tagList: Tag[] = [];

  ngOnInit() {
    this.getTagList();
  }

  getGameList(){
    this.tempGameList.subscribe(
      (response) => {
        this.gameList = response;
        this.getList();
      },
      (response) => {
        console.log("Error loading game list.");
      }
    )
  }

  getTagList(){
    this.tempTagList.subscribe(
      (response) => {
        this.tagList = response;
        console.log("FUCKANGULARFUCKANGULARFUCKANGULARFUCKANGULARFUCKANGULAR");
        console.log(this.tagList);
        this.getGameList();
        //this.getList();
      },
      (response) => {
        console.log("Error loading tag list.");
      }
    )
  }

  getList(){
    var query = sessionStorage.getItem('gamesearch');
    var tags: Tag[] = JSON.parse(sessionStorage.getItem('tags'));
    var publisher = sessionStorage.getItem('publisher');
    //console.log("Rating in session from searchlist is " + sessionStorage.getItem('rating'));
    var rating = sessionStorage.getItem('rating');
    //console.log("Rating in session from searchlist variable is " + rating);
    var gameToConsider;
    console.log(tags);
    
    for(var i=0; i<this.gameList.length; i++){
      gameToConsider = this.gameList[i];
      //console.log(gameToConsider.tags);
      if(query != null && query != ""){
        if(!gameToConsider.gname.includes(query)){
          console.log(gameToConsider.gname + " does not contain " + query);
          gameToConsider = null;
        }
      }

      if(gameToConsider != null && tags != null && tags != []){
        console.log("Can check tags for " + gameToConsider.gname);
        console.log(gameToConsider);
        var keep=true;
        var check=true;
        for(var k=0; k<this.tagList.length; k++){
          if(gameToConsider == null){
            break;
          }
          for(var j=0; j<tags.length; j++){
            if(tags[j].t_id == this.tagList[k].t_id){
              console.log("tag exists");
              check=false;
              for(var l=0; l<this.tagList[k].games.length; l++){
                if(this.tagList[k].games[l].g_id == gameToConsider.g_id){
                  check=true;
                  console.log(gameToConsider.gname + " has the tag " + tags[j].tname + ".");
                  break;
                }
              }
              if(!check){
                keep=false;
                break;
              }
            }
            /*if(tags[j].tname == gameToConsider.tags[k].tname){
              console.log(gameToConsider.gname + " has the " + gameToConsider.tags[k].tname + "tag!");
              keep=true;
              break;
            }*/
          }
          if(!keep){
            console.log(gameToConsider.gname + " does not have the tag " + tags[j].tname + ".");
            gameToConsider = null;
          }
        }
      }

      if(gameToConsider != null && publisher != null && !isUndefined(publisher) && publisher != "undefined" && publisher != ""){
        console.log("AAAAAA");
        console.log("Can check publisher for " + gameToConsider.gname);
        if(gameToConsider.publisher != publisher){
          console.log(gameToConsider.gname + " was not published by " + publisher);
          gameToConsider = null;
        }
      }

      if(gameToConsider != null && rating != null && !isUndefined(rating) && rating != "undefined" && rating != ""){
          console.log("Can check rating for " + gameToConsider.gname);
        if(gameToConsider.esrb != rating){
          console.log(gameToConsider.gname + " was not rated " + rating);
          gameToConsider = null;
        }
      }
      
      if(gameToConsider != null){
        console.log(gameToConsider.gname + " has survived!");
        console.log(gameToConsider);
        this.gamesForList.push(gameToConsider);
      }
    }
    console.log(this.gamesForList);
  }
  
  setActiveGame(gameg: Game){
    console.log("This is the game object")
    console.log(gameg);
    sessionStorage.setItem('game', gameg.gname);
    sessionStorage.setItem('gameid', gameg.g_id.toString());
    sessionStorage.setItem('gameObj', JSON.stringify(gameg));
  }

}
