import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReviewRating } from '../models/reviewrating';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewratingsService {

  constructor(private http :HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Orgin' : 'http://localhost:8080'
  })
  options : any = {
    headers: this.httpHeaders
  }
  addRating(rating :ReviewRating) :Observable<any>{
    return this.http.post<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/ratings", rating, this.options);
  }

  listRatings(): Observable<ReviewRating[]> {
    var reviewratings= this.http.get<ReviewRating[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/ratings');
    console.log(reviewratings);
    return reviewratings;
  }







}
