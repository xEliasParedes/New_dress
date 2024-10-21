import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiKey: string = '6b384582fa1855beacdec5b6069b82d5';

  constructor(private http:HttpClient) { }
  obtenerTiempoC(lat: number, lon: number): Observable<any> {
    //estructura para llamar a la api
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=es`;
    console.log(url)
    return this.http.get(url);
  }
}
