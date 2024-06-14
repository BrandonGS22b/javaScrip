class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

let Persona1 = new Persona('brandon ','garica');

//modifica el atributo de brandon a juan carlos
Persona1.nombre = 'juan carlos';

console.log(Persona1.nombre);

