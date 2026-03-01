import { Routes } from '@angular/router';
import { Sample } from './components/sample/sample';
import { Forms } from './components/sample/forms/forms';

export const routes: Routes = [
    {
        path: '', redirectTo: '/sample', pathMatch: 'full'
    }, {
        path: 'sample', component: Sample,
        children: [{
            path: 'forms', component: Forms,
        }]
    }
];
