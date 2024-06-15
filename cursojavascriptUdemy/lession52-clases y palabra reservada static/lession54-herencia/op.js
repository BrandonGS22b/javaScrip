class Persona{
    //clase statica
    static contador = 0;
    //el stactic se solicita directo mediante la clase statica
    email = "mi correo actual";
    //mientras este atributo email tenemos que llamarlo atraves de un objeto

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }



    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombrecompleto(){

        return this._nombre + " " + this._apellido;


    }
    //vamos a crear un metodo static
    //luego vamos a heredarlo desde empleado
    static saludar(){
        console.log("hola brandon");
    }

    static saludar2(persona) {
        console.log(persona.nombre+" "+ persona.apellido);
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
//sobreescritura toca tener en cuenta el super para llamarlo de la clase padre

nombrecompleto(){

    return super.nombrecompleto + " ," + this._departamento + " " + this._departamento;


}



};
//objero de la clase padre
let persona2 = new empleado ('brandon', 'garcia','desarrollo');

//variable email o atributo email que esta en la linea 5

console.log(persona2.email);

//console.log(persona2.apellido);
//console.log(persona2.departamento); 

//llamo al metodo de nombre completo ya que la clase empleado hereda ese metodo tambien
console.log(persona2.nombrecompleto());//me devuelve ana lopez

 Persona.saludar();
//aqui lo heredamos desde la clase empleado hereda ese metodo
 empleado.saludar();
 Persona.saludar2(persona2);

 console.log( Persona.contador);
 





