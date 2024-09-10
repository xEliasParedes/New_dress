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

      const navigation = this.router.getCurrentNavigation();
      if(navigation?.extras.state){
        const state = navigation.extras.state as {login:{ usuario: string; password: string}};
        this.usuario = state.login.usuario;
      }
  }

  ngOnInit() {}


}

