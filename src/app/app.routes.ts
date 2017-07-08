import { RouterModule } from '@angular/router';

import { HomeComponent } from './body/content/home/homeContent';
import { LunchComponent } from './body/content/Menus/Lunch/lunchComponent';
import { DinnerComponent } from './body/content/Menus/dinner/dinnerComponent';
import { BrunchComponent } from './body/content/Menus/brunch/brunchComponent';
import { TeaComponent } from './body/content/Menus/tea/teaComponent';
import { ContactComponent } from './body/content/contact/contactComponent';
const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'dinner', component: DinnerComponent },
  { path: 'brunch', component: BrunchComponent },
  { path: 'tea', component: TeaComponent },
  {path: 'contact', component: ContactComponent }

];

export const appRouting = RouterModule.forRoot(appRoutes);
