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
    this.guardarUsuario();
   }
   async Init() {
    const storage = await this.storage.create();
    this._storage = storage;
   }

   guardarUsuario(nombre: string, contrasena: string){
    const existe = this.sesion.find(c => c.strNombre === nombre);
    if(!existe){
      this.sesion.unshift({strNombre: nombre, strContrasena: contrasena}) //
      this._storage?.set('sesion', this.sesion);
    }
   }
}
