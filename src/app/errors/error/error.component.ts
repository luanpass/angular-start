import { Component, OnInit, Input } from '@angular/core';

const uri_404 = 'https://nerdweb.com.br/uploads/1578511646-cropit-.jpg';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

   url=uri_404;
   alt='Error 404 - Page Not Found';
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
