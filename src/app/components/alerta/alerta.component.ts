import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
})
export class AlertaComponent  implements OnInit {

  
  message: string | null = null;

  constructor(private alertService: AlertaService) {}

  ngOnInit() {
    this.alertService.alert$.subscribe((msg:any) => {
      this.message = msg;
      setTimeout(() => this.message = null, 3000); // Ocultar después de 3 segundos
    });
  }

}
