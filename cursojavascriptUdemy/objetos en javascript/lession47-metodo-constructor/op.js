//funcion constructor de objeto de tipo constructor
function Personas(nombre,apellido,email){ 
    //el this.nombre es la declaracion de la variable 
this.nombre = nombre;

this.apellido = apellido;

this.email = email;

//metodo lession48
this.nombrecompleto= function(){ 


    return this.nombre + " " + this.apellido;
}


}
//objeto padre aqui agregamos los objetos
let padre=  new Personas("brandon","garcia","brandon@hotmail.com");

//llamamos el nombre completo del padre que hizimos en el constructor
console.log(padre.nombrecompleto());


let madre=  new Personas("emilsen","suarez","emislsen@hotmail.com");

console.log(madre);

