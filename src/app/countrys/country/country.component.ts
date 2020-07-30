import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './country.component.html'
})
export class CountryComponent {
    @Input() title='';
    @Input() url='';
    @Input() alt='';
    @Input() link='';
}
