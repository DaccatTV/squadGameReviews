import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  list(): Observable<Message[]> {
    var message= this.http.get<Message[]>('http://localhost:8080/messages');
    console.log(message);
    return message;
  }

  getMessage(m_id: number): Observable<Message>{
    var message = this.http.get<Message>('http://localhost:8080/messages/' + m_id);
    return message;
  }
}
