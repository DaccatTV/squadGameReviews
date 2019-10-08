import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  /*httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
    'Access-Control-Allow-Origin' : 'http://localhost:8080'
  })
  
  options : any = {
    headers: this.httpHeaders
  }*/

  list(): Observable<Account[]> {
    var account = this.http.get<Account[]>('http://localhost:8080/accounts');
    console.log(account);
    return account;
  }

  getAccount(uname: String): Observable<Account>{
    var account = this.http.get<Account>('http://localhost:8080/accounts/username/' + uname);
    return account;
  }
}
