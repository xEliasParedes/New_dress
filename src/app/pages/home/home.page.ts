import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  usuario: string ='';

  constructor(private router:Router) {
      //la constante crea un objeto receptor
      const navigation = this.router.getCurrentNavigation();
      //si en el objeto hay datos
      if(navigation?.extras.state){
        //guarda en state los datos recibidos
        const state = navigation.extras.state as {login:{ usuario: string; password: string}};
        //guarda en usuario, los datos de state
        this.usuario = state.login.usuario;
      }
  }

  ngOnInit() {}


}

