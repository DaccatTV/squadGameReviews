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


  
  list(): Observable<Game[]> {
    var game= this.http.get<Game[]>('http://localhost:8080/games');
    console.log(game);
    return game;
  }

  getGame(g_id: number): Observable<Game>{
    var game = this.http.get<Game>('http://localhost:8080/games/' + g_id);
    return game;
  }




}//eof
