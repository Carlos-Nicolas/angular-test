// por buenas practicas se le agrega  "I"
// antes del nombre para indicar que es una
// interfaz o alguna variante pude ser
// agregarle al final "Contract"
// ejemplo: "ICUD" o "CRUDContract"

export interface ICRUD{
  find():void;
  findById ():void;
  create():void;
  remplace():void;
  update():void;
  delete():void;
}


// Interfaz : es como si fuera un contrato,
// donde se específica que se debe hacer, lo que debe tener y
// si se debe seguir ese marco de trabajo

 export class CRUD implements ICRUD{
   find():void{}
   findById ():void{}
    create():void{}
    remplace():void{}
    update():void{}
  delete():void{}
 }

 export class CRUDAsignaturas implements ICRUD{
  find():void{}
  findById ():void{}
   create():void{}
   remplace():void{}
   update():void{}
 delete():void{}
}
