import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { GamespageComponent } from '../component/gamespage/gamespage.component';
import { ConsoleComponent } from '../component/console/console.component';

import { BrowserRoutingModule } from './browserpage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserRoutingModule
  ],
  declarations: [
    GamespageComponent,
    ConsoleComponent
  ]
})
export class GameBrowseModule {}