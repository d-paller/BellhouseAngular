import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRouting } from './app.routes';
import { AppComponent }  from './app.component';
import { NavComponent } from './nav/navComponent';
import { FeatureComponent } from './body/feature/featureComponent';
import { HomeComponent } from './body/content/home/homeContent';
import { FooterComponent } from './footer/footer';
import { LunchComponent } from './body/content/Menus/Lunch/lunchComponent';
import { DinnerComponent } from './body/content/Menus/dinner/dinnerComponent'

@NgModule({
  imports: [BrowserModule, appRouting, FormsModule],
  declarations:
  [
    AppComponent,
    NavComponent,
    FeatureComponent,
    HomeComponent,
    FooterComponent,
    LunchComponent,
    DinnerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
