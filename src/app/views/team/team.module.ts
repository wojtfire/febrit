import {NgModule} from '@angular/core';
import {TeamComponent} from './team.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule {}
