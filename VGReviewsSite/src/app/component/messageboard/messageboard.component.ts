import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {

  constructor() { }

  forumObjString: string;
  forumObj: Forum;
  messageList: Message[];

  ngOnInit() {
    this.forumObjString = sessionStorage.getItem("forumObj");
    this.forumObj = JSON.parse(this.forumObjString);
    this.messageList = this.forumObj.messages;
  }

}
