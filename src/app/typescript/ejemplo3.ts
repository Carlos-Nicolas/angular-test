//herencia

import { Persona } from './ejemplo1';
import { Genero } from './ejemplo4';

export class Empleado extends Persona {
  salario: number;
  constructor(nombre: string, apellido: string, fechaNacimiento: Date, genero: Genero, salario: number) {
    super({nombre, apellido, fechaNacimiento, genero});
    this.salario = salario;
  }
}
