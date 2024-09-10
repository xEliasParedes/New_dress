import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:any={
    usuario:"",
    password:""
}

  alertButtons = ['ingresar()']

  constructor(public router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  validateLogin(){
    if(this.validarCampo(this.login)){
      let NavigationExtras : NavigationExtras ={
        state:{login : this.login}
      };
      this.router.navigate(['/home'], NavigationExtras);
    }
  }

  field:string=""
  validarCampo(model:any){
    for(var [key,value] of Object.entries(model)){
      console.log(key)
      if(value == ""){
        this.field = key;
        console.log(value)
        return false;
      }
    }
    return true;
  }

  async presentAlert(titulo:string,sub_titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: sub_titulo,
      message: mensaje,
      buttons: ['Action'],
    });

    await alert.present();
  }




  ingresar(){
    if(this.validarCampo(this.login)){
      let NavigationExtras:NavigationExtras={
        state:{login: this.login}
      };
      console.log(this.login)
      this.router.navigate(['/home'],NavigationExtras);
    }else{
      this.presentAlert("Columnas Vacias", "no puedes iniciar sesion", "el siguiente campo: " + this.field + " esta vacio")
    }
    
  }

  

}
