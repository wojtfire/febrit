import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TeamModule} from './views/team/team.module';
import { EstimateContainerComponent } from './estimate-container/estimate-container.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
    EstimateContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TeamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
