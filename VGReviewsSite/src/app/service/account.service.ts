import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  //private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : '*'
  })
  
  options : any = {
    headers: this.httpHeaders
  }

  list(): Observable<Account[]> {
    var account = this.http.get<Account[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/accounts');
    console.log(account);
    return account;
  }

  addAccount(acc: Account): Observable<any> {
    return this.http.post<any>("http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/accounts", acc, this.options);
  }

  getAccount(uname: String): Observable<Account>{
    var account = this.http.get<Account>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/accounts/username/' + uname);
    return account;
  }
}
