import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryListComponent } from './countrys/country-list/country-list.component';
import { CountryFormComponent } from './countrys/country-form/country-form.component';
import { ErrorComponent } from './errors/error/error.component';
import { CountrySingleComponent } from './countrys/country-single/country-single.component';

const routes: Routes = [
    { path: 'search/countrys', component: CountryListComponent },
    { path: 'search/:countrySingle', component: CountrySingleComponent },
    { path: 'form', component: CountryFormComponent },
    { path: '**', component: ErrorComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}