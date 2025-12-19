import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Later you can add:
  // { path: 'about', component: AboutComponent },
  // { path: 'admissions', component: AdmissionsComponent },
  // { path: 'contact', component: ContactComponent }
];
