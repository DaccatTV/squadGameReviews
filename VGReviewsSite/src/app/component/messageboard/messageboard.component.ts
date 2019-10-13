import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.css']
})
export class MessageboardComponent implements OnInit {

  constructor(private messageservice: MessagesService) { }

  forumObjString: string;
  forumObj: Forum;
  messageList: Message[];
  message: string;
  newMessage: Message;
  date: Date;
  dateString: string;
  account: Account;
  selectedMessage: Message;

  ngOnInit() {
    this.forumObjString = sessionStorage.getItem("forumObj");
    this.forumObj = JSON.parse(this.forumObjString);
    this.messageList = this.forumObj.messages;
  }

  submitMessage(){

    this.account = JSON.parse(sessionStorage.getItem("userObj"));

    this.newMessage = new Message(null, null, null, null, null);
    this.newMessage.message = this.message;
    this.newMessage.messageAccount = this.account;
    this.newMessage.forum = this.forumObj;
    
    this.dateString = ((new Date().getMonth() + 1).toString() + "/" + new Date().getDate().toString() + "/" + new Date().getFullYear().toString() + " " + new Date().getHours().toString() + ":" + new Date().getMinutes().toString());

    this.newMessage.posttime = this.dateString;

    this.messageservice.addMessage(this.newMessage).subscribe(
      (response) => {
        console.log("success!");
      },
      (response) => {
        console.log("failure...");
      }
    )

  }

  deleteMessage(i: number){
    this.selectedMessage = this.messageList[i];
    this.messageservice.deleteMessage(this.selectedMessage).subscribe(
      (response) => {
        console.log("success!");
      },
      (response) => {
        console.log("failure...");
      }
    );
  }

  getStatus(){
    var temp = sessionStorage.getItem("userObj");
    if(temp!=null){

    console.log(JSON.parse(temp).status);
    return JSON.parse(temp).status;
    }
    return null;
  }

}
