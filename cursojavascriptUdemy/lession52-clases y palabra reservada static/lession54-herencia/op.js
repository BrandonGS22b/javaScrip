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



    get apellido(){
        return this.apellido;
    }

    set apellido(apellido){
        this.apellido = apellido;
    }

}

class empleado extends Persona {

constructor(nombre,apellido,departamento){
    super(nombre,apellido); //llamar al contructor de la clase padre que la clase padre es persona
    this._departamento =departamento; //

};
get departamento(){  
    
    return this._departamento;

}
set departamento( Departamento ){ 
     this._departamento = Departamento;

}



};

let persona2 = new empleado ('brandon', 'garcia','desarrollo');

console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.departamento); 
 
 





