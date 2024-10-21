import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, search, shirt, person, aperture } from 'ionicons/icons';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
})
export class BarraComponent implements OnInit {

  constructor() {
    addIcons({ home, search, shirt, person, aperture });
  }

  ngOnInit() {}
}
