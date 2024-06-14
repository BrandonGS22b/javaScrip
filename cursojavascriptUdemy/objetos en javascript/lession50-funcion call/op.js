let persona ={
    nombre: "brandon",
    apellido: "bueno",
    telefono:"563737463",
    email:"brandon@gmail.com",
    edad: 25,
    //anadimos un metodo 
    nombrecompleto : function(profesion,telefono){
        return profesion+";"+ this.nombre + " " + this.apellido+","+ telefono;
    }


}

let perosna2 = {
    nombre: "lys",
    apellido: "suarez",
  

    }

    console.log(persona.nombrecompleto("programador", 55555555));

    console.log(persona.nombrecompleto.call(perosna2,"ingeniero", 3214481541));
   