import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowsepageComponent } from './browsepage/browsepage.component';
import { GamespageComponent } from './gamespage/gamespage.component';
import { CreatereviewComponent } from './createreview/createreview.component';
import { ReviewComponent } from './review/review.component';
import { RatereviewComponent } from './ratereview/ratereview.component';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BrowsepageComponent,
    GamespageComponent,
    CreatereviewComponent,
    ReviewComponent,
    RatereviewComponent,
    ConsoleComponent
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
