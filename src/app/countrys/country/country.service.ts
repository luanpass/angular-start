import { Country } from "./country";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_ALL_COUNTRY = "http://localhost:8086/country/getAll";

const API_COUNTRY = "https://restcountries.eu/rest/v2/name/";

@Injectable({providedIn:"root"})
export class CountryService{

    constructor(private http:HttpClient){}
    
    getAllCountrys(){
      return this.http.get<Country[]>(API_ALL_COUNTRY); 
    }

    getCountry(countrySingle: string){
      return this.http.get<Country[]>(API_COUNTRY + countrySingle); 
    }
}