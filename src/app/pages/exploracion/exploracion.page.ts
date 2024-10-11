import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.page.html',
  styleUrls: ['./exploracion.page.scss'],
})
export class ExploracionPage implements OnInit {
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ]; //se debe remplazara por la data de los titulos cuando se incorpore firebase;
  public results = [...this.data];



  
  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1) ;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
