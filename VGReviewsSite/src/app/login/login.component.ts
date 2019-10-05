import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rUsername :string;
  rPassword :string;

  checkRegister() {
    if (this.rUsername == '') {
      return false;
    }
    if (this.rPassword == '') {
      return false;
    }
  }

}
