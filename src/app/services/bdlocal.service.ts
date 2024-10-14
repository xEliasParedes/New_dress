import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Isesion } from '../interfaces/isesion';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  sesion: Isesion[] = [];
  private _storage: Storage | null = null;
  constructor(private storage: Storage, public toastController: ToastController) {
    this.Init();
    this.cargarUsuario();
   }
   async Init() {
    const storage = await this.storage.create();
    this._storage = storage;
   }

   async cargarUsuario(){
    const miSesion = await this.storage.get('sesion');
    if(miSesion){
      this.sesion = miSesion;
    }
   }

   guardarUsuario(nombre: string, contrasena: string){
    const existe = this.sesion.find(c => c.strNombre === nombre);
    if(!existe){
      this.sesion.unshift({strNombre: nombre, strContrasena: contrasena}) //
      this._storage?.set('sesion', this.sesion);
      this.presentToast('Usuario guardado')
    }else{
      this.presentToast('El usuario ya existe')
    }
   }

   eliminarUsuario(nombre: string){
    const existe = this.sesion.find(c => c.strNombre === nombre );
    if(existe){
      this.sesion = this.sesion.filter(c => c.strNombre !== nombre);
      this._storage?.set('sesion', this.sesion);
      console.log(this.sesion.length);
      this.presentToast('Usuario eliminado')
    }else{
      this.presentToast('El usuario no existe')
    }
   }

   borrarBD(){
    this._storage?.clear();
    this.sesion = [];
    console.log(this.sesion.length);
    this.presentToast('La Base de Datos a sido borra')
   }

   async presentToast(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      translucent: true,
      color: 'medium',
      position: 'top',
      duration: 3000
    })
    toast.present();
   }

   async mostrarBD(){
    return this.sesion;
   }
    
   
}
