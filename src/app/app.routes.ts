import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DuPageComponent } from './pages/du-page/du-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'du-page' , component: DuPageComponent},
  { path: 'portfolio-page' , component: PortfolioPageComponent},
  { path: 'shopping-page' , component: ShoppingPageComponent}


];
