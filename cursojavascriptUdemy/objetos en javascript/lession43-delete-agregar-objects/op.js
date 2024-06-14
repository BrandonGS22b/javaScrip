
//agregar y eliminar propiedades de nuestros objetos
let persona ={
    nombre: "brandon",
    apellido: "bueno",
    
    email:"brandon@gmail.com",
    edad: 25,
    //anadimos un metodo 
    nombrecompleto : function(){
        return this.nombre + " " + this.apellido;
    }


}

persona.telefono = " 3214481541";
persona.telefono= "322248454";


//con esto elimino el telegono
delete persona.telefono;
delete persona.nombrecompleto;

console.log(telefono);

//lo podemos guardar en una array y lo podemos imprimir

let = personaArray = Object.values(persona);
console.log(personaArray);

//otra forma de imprimir 

let = personaString =JSON.stringify(persona);
console.log(personaString);