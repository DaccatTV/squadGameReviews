import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

 
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {}

  //not used in the GET, may need them for the POST.
  httpHeaders = new HttpHeaders({

'Content-Type' : 'application/json',
'Cache-Control' : 'no-cache',
'Access-Control-Allow-Origin' : '*'

  });

  options = {
    headers: this.httpHeaders
  }

  
  getListGames(): Observable<Game[]> {
    return this.http.get<Game[]>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/games');
   // console.log(game);
   // return game;
  }

  getGame(g_id: number): Observable<Game>{
    var game = this.http.get<Game>('http://ec2-18-222-186-152.us-east-2.compute.amazonaws.com:7117/games/' + g_id);
    return game;
  }




}//eof
