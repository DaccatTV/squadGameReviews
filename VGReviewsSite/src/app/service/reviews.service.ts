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
    'Access-Control-Allow-Orgin' : '*'
  })
  options : any = {
    headers: this.httpHeaders
  }
  addReview(rev :Review) :Observable<any>{
    return this.http.post<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/reviews", rev, this.options);
  }

  deleteReview(rev: Review): Observable<any> {
    return this.http.delete<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/reviews/delete/" + rev.r_id, this.options);
  }

}
