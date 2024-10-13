import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdlocalService } from 'src/app/service/bdlocal.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  usuario: string ='';
  nombre!: string;
  contrasena!: string;
  
  usuarios: any = []; //Atraemos los ususarios desde la Base de Datos.

  constructor(private router:Router, private bdLocalService: BdlocalService) {
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

  guardarBD(){
    console.log(this.nombre);
    console.log(this.contrasena);
    this.bdLocalService.guardarUsuario(this.nombre, this.contrasena);
    this.usuarios = this.bdLocalService.mostrarBD();
    console.log(this.usuarios)
  }

  eliminarUsuario(){
    this.bdLocalService.eliminarUsuario(this.nombre);
    this.usuarios = this.bdLocalService.mostrarBD();
  }

  borrarBD(){
    this.bdLocalService.borrarBD();
    this.usuarios = this.bdLocalService.mostrarBD();
  }

  ngOnInit() {}


}

