import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-view-child',
  templateUrl: './hijo-view-child.component.html',
  styleUrls: ['./hijo-view-child.component.css']
})
export class HijoViewChildComponent {
  mensajeEnviado: string;

  editarMensaje(mensaje: string) {
    this.mensajeEnviado = mensaje;
  }
}
