import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-blood',
  templateUrl: './home-blood.component.html',
  styleUrls: ['./home-blood.component.css']
})
export class HomeBloodComponent {

  constructor(private el: ElementRef) { }

  ngOnInit():void{
    console.log(this.gruposSanguineos);
  }

  tipoSangreSeleccionado: string = '';
  puedeDonarA: string[] = [];
  puedeRecibirDe: string[] = [];
  rhNegativo:boolean = false;

  gruposSanguineos = [
    { grupo: 'A+', puedeDonarA: ['AB+'], puedeRecibirDe: ['A+', 'A-', 'O+', 'O-'] },
    { grupo: 'A-', puedeDonarA: ['A+', 'AB+'], puedeRecibirDe: ['A-', 'AB-', 'O-'] },
    { grupo: 'B+', puedeDonarA: ['AB+'], puedeRecibirDe: ['B+', 'B-', 'O+', 'O-'] },
    { grupo: 'B-', puedeDonarA: ['B+', 'AB+'], puedeRecibirDe: ['B-', 'AB-', 'O-'] },
    { grupo: 'AB+', puedeDonarA: ['AB+'], puedeRecibirDe: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'] },
    { grupo: 'AB-', puedeDonarA: ['AB+'], puedeRecibirDe: ['AB-', 'A-', 'B-', 'O-'] },
    { grupo: 'O+', puedeDonarA: ['A+', 'B+', 'AB+'], puedeRecibirDe: ['O+', 'O-'] },
    { grupo: 'O-', puedeDonarA: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], puedeRecibirDe: ['O-'] }
  ];


  seleccionarTipoSangre(event: any) {
    const tipoSeleccionado = event.target.value;

    // Buscar en el arreglo de grupos sanguíneos el tipo seleccionado
    const grupoSanguineo = this.gruposSanguineos.find(grupo => grupo.grupo === tipoSeleccionado);

    if (grupoSanguineo) {
      this.tipoSangreSeleccionado = tipoSeleccionado;
      this.puedeDonarA = grupoSanguineo.puedeDonarA;
      this.puedeRecibirDe = grupoSanguineo.puedeRecibirDe;

      if(tipoSeleccionado.includes('-')){
        this.rhNegativo = true;
        console.log("Sos rh negativo")
      }
    } else {
      this.tipoSangreSeleccionado = '';
      this.puedeDonarA = [];
      this.puedeRecibirDe = [];
    }
  }

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }


}
