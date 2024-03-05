import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'wcs/:studentName', component: StudentComponent },
    { path: '**', redirectTo: '/search' } // Redirection
];
