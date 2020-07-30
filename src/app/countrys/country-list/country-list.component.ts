import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country/country.service';
import { Country } from '../country/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countrys: Country[] = [];

  constructor(private countryService:CountryService){}
  
  ngOnInit(): void {
    this.countryService.getAllCountrys().subscribe(
      countrys=>{
        console.log(countrys);
        this.countrys = countrys;
      });

  }
}
