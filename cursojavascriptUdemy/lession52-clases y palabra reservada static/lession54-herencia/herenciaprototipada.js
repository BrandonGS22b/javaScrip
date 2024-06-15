class persona {
    constructor(nombre,edad) {
        this.nombre = nombre;
 
        this.edad = edad;
    

    }
    //ahora toca crear un metodo para que me muestre los datos de a persona
    datosPersona(){

        return "perosona nombre:"+ this.nombre + " " + this.edad;
        //esto es necesario para que nos devuelva los datos perosona
    }


}

////////////////////////////////////////////////////////////////////////////////////

class profesor extends persona {
    constructor(nombre, edad) {
        super(nombre, edad); //llamar al contructor de la clase padre que la clase padre es persona
        
    }

    set Departamento(valor) {
        this.departamento = valor;
    }
    get Departamento() {
        return this.departamento;
    }
    mostrarDatos() { 
        console.log("profesor:"+super.datosPersona()+"departamento"+this.departamento);

    }
}



class alumno extends Persona {
    constructor(matricula,nombre,edad){
        super(nombre,edad); //llamar al contructor de la clase padre que la clase padre es persona
        this.matricula = matricula;
    }
mostrarDatos(){
    console.log("alumno"+super.datosPersona()+ "Matricula"+this.matricula)
}
}


// asi llamamos y le asinamos a la clase persona los datos
/*let objPersona = new Persona("brandon","garica");
console.log("el nombre de la persona es:"+objPersona.datosPersona());*/

let objAlumno = new alumno(" brandon","garica ","151515");
console.log(objAlumno.datosPersona());
objAlumn.mostrarDatos();


let objprofesor = new profesor("brandon", 22);
objprofesor.Departamento="TIC";
objprofesor.mostrarDatos();