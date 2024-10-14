import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //pendiente de logica de acceso
  token = 'a'; //agrege algo entre las comillas para permitir el ingreso a las paginas hijos(home, exploracion,armario y perfil)


  constructor() { }

  isAuth(){
    return this.token.length > 0;
  }
}
