import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { CountrySingleComponent } from './country-single/country-single.component';


@NgModule({
    declarations: [
      CountryComponent,
      CountryListComponent,
      CountryFormComponent,
      CountrySingleComponent
    ],
    imports:[
      HttpClientModule,
      CommonModule
    ]
  })
  export class CountrysModule { }
  