import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rUsername :string;
  rPassword :string;
  rConfirmPassword :string;

  checkRegister() {
    if (this.rUsername == '') {
      return false;
    }
    if (this.rPassword == '') {
      return false;
    }
    if (this.rConfirmPassword == '') {
      return false;
    }

    if (this.rPassword != this.rConfirmPassword) {
      return false;
    }
    
  }

}
