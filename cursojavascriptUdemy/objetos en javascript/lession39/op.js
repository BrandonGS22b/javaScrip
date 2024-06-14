let x = 10;
let nombre = "luis";


let persona ={
    nombre: "brandon",
    apellido: "bueno",
    telefono:"563737463",
    email:"brandon@gmail.com",
    edad: 25,
    //anadimos un metodo 
    nombrecompleto : function(){
        return this.nombre + " " + this.apellido;
    }


}
console.log(persona);



// si quiero imprimir algun objeto que esta por dentro del objeto persona 


console.log(persona.nombre+ " "+persona.apellido);

//lo siguiente que voy hacer es llamar el metodo que voy a llamar el nombre completo

console.log(persona.nombrecompleto());



    //otra forma de crear objetos 

    let perosna2 = new Object();

    perosna2.telefononombre="brandon";
    perosna2.apellido="bueno";
    perosna2.telefono="563737463";
    perosna2.email="brandon@gmail.com";
    perosna2.edad=25;

    console.log(perosna2 );