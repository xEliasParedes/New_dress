import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
 //funcion de espera
 setTimeout(() => {
  //cuando se active la pagina, manda al usuario a login, luego de 2,5seg
  this.router.navigate(['/login']);
}, 2500);
  }

}
