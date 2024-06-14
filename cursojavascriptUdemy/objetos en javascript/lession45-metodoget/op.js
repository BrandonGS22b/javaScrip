let persona ={
    nombre: "brandon",
    apellido: "bueno",
    
    email:"brandon@gmail.com",
    edad: 25,
    //anadimos un metodo 

    //cambiamos y agregamos el get
    get nombrecompleto(){
        return this.nombre + " " + this.apellido;
    }


}

console.log(persona.nombrecompleto);