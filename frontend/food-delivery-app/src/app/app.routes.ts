import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseMenuComponent } from './pages/browse-menu/browse-menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'browse', component: BrowseMenuComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'cart', component: CartComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
