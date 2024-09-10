import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  restablecer:any={
    Email:"",
    
  }

  alertButtons = ['buscar()']

  constructor(public router:Router,private alertController:AlertController) { }

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

  async presentAlert(titulo:string,sub_titulo:string,mensaje:string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: sub_titulo,
      message: mensaje,
      buttons: ['Action'],
    });

    await alert.present();
  }




  buscar(){
    if(this.validarCampo(this.restablecer)){
      let NavigationExtras:NavigationExtras={
        state:{restablecer: this.restablecer}
      };
      this.router.navigate(['/login'],NavigationExtras);
    }else{
      this.presentAlert("Error- Columna Vacia", "no puedes buscar un usuario", "el siguiente campo: " + this.field + " esta vacio")
    }
    
  }

}
