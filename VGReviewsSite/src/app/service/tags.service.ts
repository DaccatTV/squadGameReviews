import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

 
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  list(): Observable<Tag[]> {
    var tag= this.http.get<Tag[]>('http://localhost:8080/tags');
    console.log(tag);
    return tag;
  }

  getReview(t_id: number): Observable<Tag>{
    var tag = this.http.get<Tag>('http://localhost:8080/tags/' + t_id);
    return tag;
  }
}
