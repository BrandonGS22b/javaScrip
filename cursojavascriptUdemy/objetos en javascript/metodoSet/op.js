let persona ={
    nombre: "brandon",
    apellido: "bueno",
    
    email:"brandon@gmail.com",
    edad: 25,
    idioma: "es",

    get lang(){


     return   this.idioma.toUpperCase(); 
    },
    //aplicamos el metodo set
    set lang(Lang){
        this.idioma = Lang.toUpperCase();

    },


    //anadimos un metodo 

    //cambiamos y agregamos el get
    get nombrecompleto(){
        return this.nombre + " " + this.apellido;
    }


}
console .log(persona.lang);
persona.lang ='en'; // en
console .log(persona.lang);