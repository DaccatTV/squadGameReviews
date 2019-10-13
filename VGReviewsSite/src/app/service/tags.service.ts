import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

 
  //private headers = new HttpHeaders({'Content-Type': 'application/json'});

  httpHeaders = new HttpHeaders({

    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : '*'
    
      });
    
    
      options = {
        headers: this.httpHeaders
      }

  constructor(private http: HttpClient) {}
  
 

  list(): Observable<Tag[]> {
    var tag= this.http.get<Tag[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/tags');
    console.log(tag);
    return tag;
  }

  getReview(t_id: number): Observable<Tag>{
    var tag = this.http.get<Tag>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/tags/' + t_id);
    return tag;
  }
}
