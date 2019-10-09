import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from 'src/app/models/console';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  list(): Observable<Console[]> {
    var consoles = this.http.get<Console[]>('http://localhost:8080/console');
    console.log(consoles);
    return consoles;
  }

  getForum(c_id: number): Observable<Console>{
    var consoles = this.http.get<Console>('http://localhost:8080/console/' + c_id);
    return consoles;
  }

}
