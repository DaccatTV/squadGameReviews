import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviepageComponent } from './moviepage/moviepage.component';
import { BrowsepageComponent } from './browsepage/browsepage.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'moviepage', component:MoviepageComponent},
  {path:'browsepage', component:BrowsepageComponent},
  {path : '', redirectTo : '/browsepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
