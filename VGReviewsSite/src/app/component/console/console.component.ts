import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ConsolesService } from 'src/app/service/consoles.service'
import { Observable } from 'rxjs';
import { Console } from 'src/app/models/console';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(private consoles: ConsolesService) { }

  tempConsoleList: Observable<Console[]> = this.consoles.list();
  consoleList: Console[];
  currentConsole: Console;


  ngOnInit() {
    this.getConsoleList();
  }

  //ngAfterContentChecked(){
    //this.getActiveConsole();
  //}

  getConsoleList(){
    this.tempConsoleList.subscribe(
      (response) => {
        console.log(response);
        this.consoleList = response;
        this.getActiveConsole();
        console.log(this.consoleList);
      },
      (response) => {
        console.log("Error loading console list.");
      }
    )
  }

  getActiveConsole(){
    //console.log("The active console is " + sessionStorage.getItem('console'));
    var i;
    for (i = 0; i < this.consoleList.length; i++) {
      if(this.consoleList[i].cname == sessionStorage.getItem('console')){
        this.currentConsole = this.consoleList[i];
        console.log(this.currentConsole);
        break;
      }
    } 
  }
  
  setActiveGame(gameg: Game){
    sessionStorage.setItem('game', gameg.gname);
    sessionStorage.setItem('gameid', gameg.g_id.toString());
    sessionStorage.setItem('gameObj', JSON.stringify(gameg));
    //window.location.href="/gamespage";
  }

}
