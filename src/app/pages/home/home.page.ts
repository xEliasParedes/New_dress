import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { Geolocation } from '@capacitor/geolocation';



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

  //API 
  // estructura definida para no usar clases.
  apiData: any; // alamcena los datos de la api
  temperatura: number | undefined;// almacena el dato de temperatura
  estado: string | undefined; // almacena el dato de descripcion(llueve, soleado, nublado, etc)
  weatherIconUrl: string | undefined;// alamcena el id del icono representativo de la descripcion

  //LocalStorage
  //definicion de atributos llave y duracion de cache
  private cacheKey = 'DatosDelTiempo';
  private cacheTimeKey = 'Creacion';
  private cacheDuration = 900;
  showToast: boolean = false;



  constructor(private router:Router, private bdLocalService: BdlocalService, private apiService:ApiService) {
      //la constante crea un objeto receptor
      const navigation = this.router.getCurrentNavigation();
      //si en el objeto hay datos
      if(navigation?.extras.state){
        //guarda en state los datos recibidos
        const state = navigation.extras.state as {login:{ usuario: string; password: string}};
        //guarda en usuario, los datos de state
        this.usuario = state.login.usuario;
      
        // Si hay datos de navegación, mostrar el toast
        this.showToast = true; 
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

 

  
  
  async ngOnInit() {
    //inicio de funcion que obtiene los datos
    await this.imprimirPosicion();

    // Si el usuario recarga la página, no mostrar el toast
    this.showToast = false;
  }

  private async imprimirPosicion() {
    const { coords } = await Geolocation.getCurrentPosition();// funcion que optiene los datos de geolocalizacion
    const lat = coords.latitude;//latitud almacenada
    const lon = coords.longitude;//longitud almacenada
    console.log('informacion de latitud y longitud:', coords.latitude, coords.longitude); //Comprobacion por consola

    this.consultarApi(lat, lon) //datos entregados para poder llamar a la API


  };

  consultarApi(lat: number, lon: number) {
    
    const cachedData = this.obtenerCacheData();

    // Si hay datos en caché y no han expirado, usar esos datos
    if (cachedData) {
      this.apiData = cachedData;
      this.temperatura = this.apiData.main.temp;
      this.estado = this.apiData.weather[0].description;
      const iconCode = this.apiData.weather[0].icon;
      this.weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      console.log('Datos obtenidos de la caché:', this.apiData);
    } else {
      //solicitar datos de la api
      this.apiService.obtenerTiempoC(lat, lon).subscribe({
        next: (data) => {
          
          // Obtener la temperatura y el estado del clima
          this.temperatura = data.main.temp;
          this.estado = data.weather[0].description;

          // Crear la URL del icono basado en el ID proporcionado
          const iconCode = data.weather[0].icon;
          this.weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          
          //empaquetar datos al local storage
          this.cacheData(data);
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
  //EMPAQUETADO DEL CACHE
  private cacheData(data: any) {
    localStorage.setItem(this.cacheKey, JSON.stringify(data));//guarda los datos de la GEO y la API en formato json
    localStorage.setItem(this.cacheTimeKey, new Date().getTime().toString());//guarda cuando se creo el cache
    console.log('Datos guardados en caché:', data);
  }

  //OBTENCION DEL PAQUETE DE CACHE
  private obtenerCacheData() {
    const time = localStorage.getItem(this.cacheTimeKey);
    const currentTime = new Date().getTime();

    // Comprobar si la caché ha expirado
    //si el tiempo de creacion de cache existe y si el tiempo pasado es menor que la duracion de expiracion
    if (time && (currentTime - Number(time)) < this.cacheDuration) {
      //entonces obten los datos y y retornalo en consultar api
      const data = localStorage.getItem(this.cacheKey);
      console.log('Datos recuperados de caché:', data);
      return data ? JSON.parse(data) : null;
    }
    // de lo contrario devuelva nada 
    return null;
  }

  
  



    
  }




