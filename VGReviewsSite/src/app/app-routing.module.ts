import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowsepageComponent } from './component/browsepage/browsepage.component';
import { GamespageComponent } from './component/gamespage/gamespage.component'
import { CreatereviewComponent } from './component/createreview/createreview.component';
import { ConsoleComponent } from './component/console/console.component';
import { AdminaccountlistComponent } from './component/adminaccountlist/adminaccountlist.component';
import { MessageboardComponent } from './component/messageboard/messageboard.component';
import { SearchComponent } from './component/search/search.component';
import { SearchlistComponent } from './component/searchlist/searchlist.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'browsepage', component:BrowsepageComponent},
  {path:'search', component:SearchComponent},
  {path:'searchlist', component:SearchlistComponent},
  {path:'gamespage', component:GamespageComponent},
  {path:'createreview', component:CreatereviewComponent},
  {path:'console', component:ConsoleComponent},
  {path:'accounts', component:AdminaccountlistComponent},
  {path: 'messageboard', component:MessageboardComponent},
  {path : '', redirectTo : '/browsepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
