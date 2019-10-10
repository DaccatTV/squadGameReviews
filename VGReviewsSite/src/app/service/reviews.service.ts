import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from 'src/app/models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http :HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Orgin' : 'http://localhost:8080'
  })
  options : any = {
    headers: this.httpHeaders
  }
  addReview(rev :Review) :Observable<any>{
    return this.http.post<any>("http://localhost:8080/reviews", rev, this.options);
  }

  list(): Observable<Review[]> {
    var review= this.http.get<Review[]>('http://localhost:8080/reviews');
    console.log(review);
    return review;
  }

  getReview(r_id: number): Observable<Review>{
    var review = this.http.get<Review>('http://localhost:8080/messages/' + r_id);
    return review;
  }
}
