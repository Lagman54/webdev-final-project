import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { BrowseMenuComponent } from './pages/browse-menu/browse-menu.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'browse', component: BrowseMenuComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
