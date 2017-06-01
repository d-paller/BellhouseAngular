import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavComponent } from './nav/navComponent';
import { FeatureComponent } from './body/feature/featureComponent';
import { HomeComponent } from './body/content/home/homeContent';
import { FooterComponent } from './footer/footer';

@NgModule({
  imports: [BrowserModule],
  declarations:
  [
    AppComponent,
    NavComponent,
    FeatureComponent,
    HomeComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
