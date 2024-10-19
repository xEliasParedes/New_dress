import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BdlocalService } from 'src/app/services/bdlocal.service';



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

  apiData: any;
  temperature: number | undefined;
  weatherState: string | undefined;
  weatherIconUrl: string | undefined;


  constructor(private router:Router, private bdLocalService: BdlocalService, private apiService:ApiService) {
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

 

  
  
  ngOnInit() {
    //cordenadas del duoc/cercania duoc
    const lat = -33.033563887809265; 
    const lon = -71.53308076902319;
    
    this.apiService.getWeather(lat, lon).subscribe({
      next: (data) => {
        this.apiData = data;
        // Obtener la temperatura y el estado del clima
        this.temperature = data.main.temp;
        this.weatherState = data.weather[0].description;
        
        // Crear la URL del icono basado en el ID proporcionado
        const iconCode = data.weather[0].icon;
        this.weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      },
      error: (error) => {
        console.error('Error al obtener los datos del clima:', error);
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
    
  }


}

