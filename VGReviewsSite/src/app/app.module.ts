import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowsepageComponent } from './component/browsepage/browsepage.component';
import { GamespageComponent } from './component/gamespage/gamespage.component';
import { CreatereviewComponent } from './component/createreview/createreview.component';
import { ReviewComponent } from './component/review/review.component';
import { RatereviewComponent } from './component/ratereview/ratereview.component';
import { ConsoleComponent } from './component/console/console.component';
import { ForumComponent } from './component/forum/forum.component';
import { AdminaccountlistComponent } from './component/adminaccountlist/adminaccountlist.component';
import { MessageboardComponent } from './component/messageboard/messageboard.component';
import { SearchComponent } from './component/search/search.component';
import { SearchlistComponent } from './component/searchlist/searchlist.component';
import { AdminaddgameComponent } from './component/adminaddgame/adminaddgame.component';
import { NewgamespageComponent } from './component/newgamespage/newgamespage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BrowsepageComponent,
    CreatereviewComponent,
    ReviewComponent,
    RatereviewComponent,
    GamespageComponent,
    ConsoleComponent,
    ForumComponent,
    AdminaccountlistComponent,
    MessageboardComponent,
    NewgamespageComponent,
    SearchComponent,
    SearchlistComponent,
    AdminaddgameComponent
  ],

  imports: [AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
