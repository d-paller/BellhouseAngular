import { Routes } from '@angular/router';

import { HomeComponent } from './body/content/home/homeContent';
import { LunchComponent } from './body/content/Menus/Lunch/lunchComponent';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lunch', component: LunchComponent }
];
