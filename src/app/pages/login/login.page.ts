import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
//modelo para obtener los datos de inicio
  login:any={
    usuario:"",
    password:""
}
  //activa la alerta cuando la funcion se ejecuta
  alertButtons = ['ingresar()']

  constructor(public router:Router ,private alertController:AlertController) { }

  ngOnInit() {
  }
//valida el modelo y sus atributos, si es true pasa los datos al state
  validateLogin(){
    if(this.validarCampo(this.login)){
      let NavigationExtras : NavigationExtras ={
        state:{login : this.login}
      };
      //lleva la pagina a home junto a los datos del state(NavigationExtras)
      this.router.navigate(['/home'], NavigationExtras);
    }
  }
  //una variable que representa el campo vacio
  field:string=""
  //funcion que recibe un modelo cualquiera(login, registro, etc)
  validarCampo(model:any){
    //recorre cada campo y valor del modelo/objeto
    for(var [key,value] of Object.entries(model)){
      //muestra por consola el campo, nombre del campo
      console.log(key)
      //determina si esta vacio value(valor del campo), si es true, guarda en field el nombre del campo
      if(value == ""){
        this.field = key;
        console.log(value)
        return false;
      }
    }
    return true;
  }
  //estructura de la alerta
  async presentAlert(titulo:string,sub_titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: sub_titulo,
      message: mensaje,
      buttons: ['Action'],
    });
    //este genera la alerta y la pone en espera(para cuando se active)
    await alert.present();
  }




  ingresar(){
    //usa la funcion validar campo con el modelo login, establecido anteriormente
    if(this.validarCampo(this.login)){
      let NavigationExtras:NavigationExtras={
        state:{login: this.login}
      };
      console.log(this.login)
      this.router.navigate(['home'],NavigationExtras);
    }else{
      //si los campos son vacios, te manda la siguiente alerta
      this.presentAlert("Columnas Vacias", "no puedes iniciar sesion", "el siguiente campo: " + this.field + " esta vacio")
    }
    
  }
  

  

}
