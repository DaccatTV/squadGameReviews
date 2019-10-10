import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowsepageComponent } from './component/browsepage/browsepage.component';
import { GamespageComponent } from './component/gamespage/gamespage.component'


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'browsepage', component:BrowsepageComponent},
  {path : '', redirectTo : '/browsepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
