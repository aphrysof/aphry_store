import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WomenSectionComponent } from './women-section/women-section.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    }, 
    {
        path: 'women',
        component: WomenSectionComponent,
        title: "Women Section"
    }, 
    {
        path: 'mens',
        component: MenSectionComponent,
        title: "Men's Section"
    },
    {
        path: 'kids',
        component: KidsSectionComponent,
        title: "Kid's Section"
    },
];
