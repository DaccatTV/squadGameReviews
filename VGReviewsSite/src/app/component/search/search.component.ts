import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/service/tags.service';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private tags: TagsService) { }

  tempTagList: Observable<Tag[]> = this.tags.list();
  tagList: Tag[];
  tagsForReview: Tag[] = null;

  tagsearch: boolean = false;
  publishersearch: boolean = false;
  ratingsearch: boolean = false;

  rPublisher: string;
  rRating: string;

  ngOnInit() {
    this.getTagList();
  }

  getTagList(){
    this.tempTagList.subscribe(
      (response) => {
        this.tagList = response;
      },
      (response) => {
        console.log("Error loading console list.");
      }
    )
  }

  gameSearchByName(){
    console.log(this.tagsearch);
    console.log(this.publishersearch);
    console.log(this.ratingsearch);
    console.log(this.rRating);
    // @ts-ignore
    var name = document.getElementById('gameSearchField').value;
    /*for( var i=0; i<this.currentConsole.games.length; i++){
      if(name.toUpperCase() === this.currentConsole.games[i].gname.toUpperCase()){
        sessionStorage.setItem('game', this.currentConsole.games[i].gname);
        sessionStorage.setItem('gameid', this.currentConsole.games[i].g_id.toString());
      }
    }*/
    //sessionStorage.setItem('game', name);
    sessionStorage.setItem('gamesearch', name);
    sessionStorage.setItem('tags', JSON.stringify(this.tagsForReview));
    sessionStorage.setItem('publisher', this.rPublisher);
    sessionStorage.setItem('rating', this.rRating);
    console.log("Rating in session is " + sessionStorage.getItem('rating'));
    
    //sessionStorage.setItem('gameid', this.currentConsole.games[i].g_id.toString());
  }

  addTag(tidt: string){
    var test = document.getElementById(tidt);
    // @ts-ignore
    var tid = Number(test.value);

    console.log("Value is " + tid);
    var canAdd = true;
    if(this.tagsForReview != null){
      console.log("array is not null");
      for(var i=0; i<this.tagsForReview.length; i++){
        //console.log(this.consolesForGame[i]);
        //for(var j=0; j<this.consoleList.length; j++){
          if(this.tagsForReview[i].t_id == this.tagList[tid].t_id){
            canAdd = false;
            break;
          }
        //}
        if(!canAdd){
          break;
        }
      }
    }else{
      this.tagsForReview = [];
    }

    if(canAdd){
      console.log(this.tagList[tid]);
      this.tagsForReview.push(this.tagList[tid]);
      console.log(this.tagsForReview);
    }

  }

  removeTag(tid: number){
    this.tagsForReview.splice(tid,1);
  }

}
