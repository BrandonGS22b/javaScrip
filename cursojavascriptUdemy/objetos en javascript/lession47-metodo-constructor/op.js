//funcion constructor de objeto de tipo constructor
function Personas(nombre,apellido,email){ 
    //el this.nombre es la declaracion de la variable 
this.nombre = nombre;

this.apellido = apellido;

this.email = email;


}
//objeto padre aqui agregamos los objetos
let padre=  new Personas("brandon","garcia","brandon@hotmail.com");

console.log(padre);


let madre=  new Personas("emilsen","suarez","emislsen@hotmail.com");

console.log(madre);