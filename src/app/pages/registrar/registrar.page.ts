import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registrar:any={
    nombre:"",
    email:"",
    password:""

  }

  alertButtons =['registrarse()']

  constructor(public router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  field:string=""
  validarCampo(model:any){
    for(var [key,value] of Object.entries(model)){
      console.log(key)
      if(value == ""){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentAlert(titulo:string, sub_titulo: string, mensaje:string){
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: sub_titulo,
      message: mensaje,
      buttons:['Action'],
    });

    await alert.present();
  }

  registrarse(){
    if(this.validarCampo(this.registrar)){
      let NavigationExtras:NavigationExtras={
        state:{registrar: this.registrar}
      };
      this.router.navigate(['/login'],NavigationExtras);
    }else{
      this.presentAlert("Columnas Vacias", "no puedes iniciar sesion", "el siguiente campo: " + this.field + " esta vacio")
    }
    
  }

}
