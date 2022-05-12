import { Genero } from './ejemplo4';
// indicamos que es una classe que se puede exportar
//nombre le la clase con mayuscula
export class Persona {
  // atributos y tipo de dato
  nombre: string | null;
  apellido: string;
  fechaNacimiento: Date;
  genero: string;

  // todos los atributos de la clase deben de ser inicializado  en el constructor
  // 1º forma
  // constructor(){
  //   this.nombre="";
  //   this.apellido="";
  //   this.fechaNacimiento = new Date();
  //   this.genero = "";
  // }

  constructor(persona = { nombre: "", apellido: "", fechaNacimiento: new Date(), genero: Genero.FEMENINO }) {
    this.nombre = persona.nombre || null;
    this.apellido = persona.apellido || '';
    this.fechaNacimiento = persona.fechaNacimiento || new Date();
    this.genero = persona.genero || '';
  }


}
