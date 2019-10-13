import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forum } from 'src/app/models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  httpHeaders = new HttpHeaders({

    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : '*'
    
      });

      options = {
        headers: this.httpHeaders
      }

  constructor(private http: HttpClient) { }

  list(): Observable<Forum[]> {
    return this.http.get<Forum[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/forums');
  }

  addForum(forum: Forum): Observable<any> {
    return this.http.post<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/forums", forum, this.options);
  }

  deleteForum(forum: Forum): Observable<any> {
    return this.http.delete<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/forums/delete/" + forum.f_id, this.options);
  }

}
