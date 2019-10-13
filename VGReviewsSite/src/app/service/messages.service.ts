import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {}

  httpHeaders = new HttpHeaders({

    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : '*'
    
  });

  options = {
    headers: this.httpHeaders
  }

  list(): Observable<Message[]> {
    var message= this.http.get<Message[]>('http://localhost:8080/messages');
    console.log(message);
    return message;
  }

  getMessage(m_id: number): Observable<Message>{
    var message = this.http.get<Message>('http://localhost:8080/messages/' + m_id);
    return message;
  }

  addMessage(message: Message): Observable<any> {
    return this.http.post<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/messages", message, this.options);
  }

  deleteMessage(message: Message): Observable<any> {
    return this.http.delete<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/messages/delete/" + message.m_id, this.options);
  }

}
