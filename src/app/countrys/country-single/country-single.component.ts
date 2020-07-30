import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../country/country.service';
import { Country } from '../country/country';

@Component({
  selector: 'ap-country-single',
  templateUrl: './country-single.component.html',
  styleUrls: ['./country-single.component.scss']
})
export class CountrySingleComponent implements OnInit {

  countrySingle: Country[] = [];

  constructor(private countryService: CountryService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const countrySingle = this.activedRoute.snapshot.params.countrySingle;

    this.countryService.getCountry(countrySingle).subscribe(
      countrys => {
        console.log(countrys);
        this.countrySingle = countrys;
      });
  }

}
