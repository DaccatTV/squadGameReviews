import { Component, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/service/console.service'
import { Observable } from 'rxjs';
import { console } from 'src/app/model/console';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(private consoles: ConsoleService) { }

  tempConsoleList: Observable<console[]> = this.consoles.list();
  consoleList: console[];
  currentConsole: console;


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
