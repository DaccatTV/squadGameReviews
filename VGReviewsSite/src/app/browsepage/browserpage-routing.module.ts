import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamespageComponent } from '../component/gamespage/gamespage.component';
import { ConsoleComponent } from '../component/console/console.component';

const routes: Routes = [
  {path:'gamespage', component:GamespageComponent},
  {path:'console', component:ConsoleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowserRoutingModule { }
