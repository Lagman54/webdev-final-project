import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
