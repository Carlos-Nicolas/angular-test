import { Component } from '@angular/core';
// // importamos la clase persona de ejemplo1.ts
// import { Persona } from './typescript/ejemplo1';
// import { CRUD, CRUDAsignaturas } from './typescript/ejemplo2';
// import { Empleado } from './typescript/ejemplo3';
// import { Genero } from './typescript/ejemplo4'


@Component({
  selector: 'gft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Título';
  // subtitle = 'Curso de Angular';
  // showSubtitle = true;
  // objeto = {
  //   a: 'valor 1',
  //   b: 'valor 2',
  // };
  // inputValor: string = "";

  // title: string | null;
  // persona: Persona;
  // empleado: Empleado;


  constructor() {
    // this.title = null;
    // this.persona = new Persona({ nombre: "carlos", apellido: "Sanchez", fechaNacimiento: new Date(), genero: Genero.MASCULINO });

    // // this.persona.nombre = 'Carlos';
    // // console.log(this.persona);

    // this.empleado = new Empleado("carlos", "Sanchez", new Date(),Genero.MASCULINO, 1000 );
    // console.log(this.empleado);
  }
}
