console.log('la ventana de tu navegador mide ${window.innerWidth}px de ancho'); 
console.log('la ventana de de tu navegador mide ${window.innerHeight}px de alto'); 


/*
window.open()
Nos permite abrir ventanas del navegador
Nota: es posible que el navegador te pita permisos para anrir una nueva ventana

-1er parametro : direccion de la nueva ventana
2do parametro : nombre de la ventana
-3do parametro : cadena de texto opciones

Nos devuelve a un objeto para acceder a esa ventana




*/

//este const nos da a acceso al metodo que esta en el html
let ventana; // aqio puedo acceder globalmente
const abrirVentana=()=>{
    //si dejo el let ventana aqui solo coy acceder a esta variable aqui adentro del metodo solamente
    //let ventana;
    //dentro de los parentesis ponemos los parametros
    window.open(/*direccion o link a donde va ir cuando le oprimamos el boton*/'https://google.com',/*nombre de la ventana*/'Mi nueva cuenta',/*aqui ponemos el tamano en la que se abre la ventana*/'width=600,height=500');

}

const cerrarVentana=() =>{
    ventana.close();



}