import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from 'src/app/models/console';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  httpHeaders = new HttpHeaders({

    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : '*'
    
      });
    
    
      options = {
        headers: this.httpHeaders
      }
  constructor(private http: HttpClient) {}

  list(): Observable<Console[]> {
    return this.http.get<Console[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/consoles');
    //console.log(consoles);
    //return consoles;
  }

  getForum(c_id: number): Observable<Console>{
    var consoles = this.http.get<Console>('http://localhost:8080/consoles/' + c_id);
    return consoles;
  }

}
