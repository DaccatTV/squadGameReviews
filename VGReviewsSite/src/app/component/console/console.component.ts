import { Component, OnInit } from '@angular/core';
import { ConsolesService } from 'src/app/service/consoles.service'
import { Observable } from 'rxjs';
import { Console } from 'src/app/models/console';

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

  getConsoleList(){
    this.tempConsoleList.subscribe(
      (response) => {
        console.log(response);
        this.consoleList = response;
      },
      (response) => {
        console.log("Error loading console list.");
      }
    )
  }

  getActiveConsole(){
    //TODO: Set the currentConsole using the session variable and the console list
  }

}
