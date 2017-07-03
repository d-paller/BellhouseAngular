import { RouterModule } from '@angular/router';

import { HomeComponent } from './body/content/home/homeContent';
import { LunchComponent } from './body/content/Menus/Lunch/lunchComponent';
import { DinnerComponent } from './body/content/Menus/dinner/dinnerComponent';
const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'dinner', component: DinnerComponent }
  // { path: 'brunch', component: BrunchComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes);
