import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browsepage',
  templateUrl: './browsepage.component.html',
  styleUrls: ['./browsepage.component.css']
})
export class BrowsepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setPC(){
    this.setConsole("pc");
  }

  setSwitch(){
    this.setConsole("switch");
  }

  setPS4(){
    this.setConsole("ps4");
  }

  setXBOX(){
    this.setConsole("xbox one");
  }

  setRetro(){
    this.setConsole("other");
  }

  setConsole(gconsole:string){
    switch(gconsole) {
      case "pc":
        console.log("pc");
        sessionStorage.setItem('console', "PC");
        break;
      case "switch":
        console.log("switch");
        sessionStorage.setItem('console', "Nintendo Switch");
        break;
      case "ps4":
        console.log("ps4");
        sessionStorage.setItem('console', "Playstation 4");
        break;
      case "xbox one":
        console.log("xbox one");
        sessionStorage.setItem('console', "XBOX One");
        break;
      default:
        console.log("other");
        sessionStorage.setItem('console', "Retro");
        // code block
    } 
  }

}
