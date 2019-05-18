import { Component } from '@angular/core';

@Component({
  selector: 'app-var-ref-plantilla',
  templateUrl: './var-ref-plantilla.component.html',
  styleUrls: ['./var-ref-plantilla.component.css']
})
export class VarRefPlantillaComponent {

  nombresCompletos: string;

  pintar(nombres: HTMLInputElement, apellidos: HTMLInputElement) {
    this.nombresCompletos = nombres.value.concat(' ').concat(apellidos.value);
  }
}
