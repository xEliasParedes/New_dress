import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //pendiente de logica de acceso
  token = '';


  constructor() { }

  isAuth(){
    return this.token.length > 0;
  }
}
