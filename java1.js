/*numericos*/
var iva = 16;//variables de tipo entero 
var total = 234.65;//variable tipo decimal
//alert(iva);
/*cadenas de TextDecoder*/
var mensaje = "Bienvenido a nuestro sitio web";
var nombreProducto = 'producto ABC';
var texto1 = "Una frase con  'comillas simples'dentro";
var texto2 = 'una frase con"comillas dobles"dentro';
var texto1 = 'Una frase con \'comillas simples\' dentro ';
var texto2 = "Una frase con \"comillas dobles\"dentro";
//alert(texto1);

/*ARRAYS*////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var dia1="lunes";
// var dia2="martes";
// var dia3="miercoles";
// var dia4="jueves";
// var dia5="viernes";
// var dia6="sabado";
// var dia7="domingo";

// var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
// var diaseleccionado=dias[0];
// var otrodia=[5];

//alert("dia de la semanas son:");

//alert(dia1);alert(dia2);alert(dia3);alert(dia4);alert(dia5);

/*boolean*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var clienteRegistrado=false;
// var ibaincluido=true;

// /*ASIGNACION*/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var numero1=3;
// var  numero2=numero1;
// /*incrementos y descrementos*/
// var numero3=5;
// ++numero3;
// --numero3;
// numero1++;
// numero1--;
// //alert(numero3);
// //alert(numero1);

// /*NEGACION*////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var visible=true;
//alert(!visible);//la ! es la negacion
//alert(visible);

// var cantidad=0;
// var vacio;
// alert(
//  vacio=!cantidad);//vacio =true
// cantidad=2;
// alert(cantidad);
// alert(vacio=!cantidad);//vacio=false
// var mensaje="";
// alert(
// mensajevacio=!mensaje);

// mensaje="bienvenido";

// alert(
// mensajevacio=!mensaje);

//OPERADORES MATEMATICOS/////////////////////////////////////////////////////////////////////////////////////////////////////
// var numero1=10;
// var numero2=5;
// alert(resultado=numero1/numero2);
// alert(resultado=3+numero1);
// alert(resultado=numero2-4);
// alert(resultado=numero1*numero2);
// alert(numero1%numero2);
// numero1=9;
// numero2=5;
// resulatado=numero1%numero2;
// alert(resulatado);

//ejemplos1////////////////////////////////
// var numero1 = 5;
// alert(numero1 +=3);
// var numero1 = 5;
// alert(numero1 -=1);
// var numero1 = 5;
// alert(numero1 *=2);
// var numero1 = 5;
// alert(numero1 /=5);
// var numero1 = 5;
// alert(numero1 %=4);

//operadores relaciones/////////////////////////////////////////////////////////////////////////////////////////////////////
/*var numero1 = 3;
var numero2 = 5;
alert(resultado = numero1 > numero2);// resultado = false
alert(resultado = numero1 < numero2); // resultado = true
numero1 = 5;
numero2 = 5;
alert(
    resultado = numero1 >= numero2); // resultado = true
alert(
    resultado = numero1 <= numero2);
resultado = true
alert(
    resultado = numero1 == numero2);// resultado = true 
alert(
    resultado = numero1 != numero2); // resultado = false
    */
////////////////////////////////////////////////////////////////////////////////////////////////////////////


//estructuras de control de flujo  if y else//////////////////////////////////////////////////////////////////
/*var mostrarmensaje = true;
if (mostrarmensaje) {
    alert("hola mundo");
}
ejemplo
var edad;
edad = prompt("ingrese la edad");
if (edad <= 12) {
    alert("todavia eres muy pequeno");
} else if (edad <= 19) {
    alert("eres un adolescente");
} else if (edad <= 35) {
    alert("aun sigues siendo adolecente")
} else { alert("eres viejo"); }
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ejemplo de for
// var mensaje="hola estoy dentro de un bebe";
// for(var i =0;i<5;i++){
//     alert(mensaje);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
//ejemplo
/*
var dias = ["lunes", "martes", "miercoles,", "jueves", "viernes", "sabado", "domingo"];
for (var i = 0; i < 7; i++) {
    alert(dias[i]);
}
for (i in dias) {
    alert(dias[i]);
}
*/
///////////////////EJEMPLOS ///////////////////////////////////////////////////
//  var mensaje ="hola mundo";
//  var numeroletras= mensaje.length;
//  alert(numeroletras);//numero de letras = 10
// ///////////////////////
//   var mensaje1="hola";
//  var mensaje2="mundo";
//   var mensaje=mensaje1+mensaje2; 
//   alert(mensaje);// mensaje= hola mundo
// ////////

//  var mensaje1="hola";
//   var mensaje2=mensaje1.concat("mundo"); 
//   alert(mensaje2);// mensaje2= hola mundo
// ////////

//   var mensaje1="hola";
// var mensaje2=mensaje1.toUpperCase();
// alert(mensaje2);//mensaje2=HOLA;
// ///////

// var mensaje1="holA";
// var mensaje2=mensaje1.toLowerCase();
// alert(mensaje2);//mensaje2=hola
// ////
/*
var mensaje = "hola";
var letra = mensaje.charAt(0);
alert(letra);//letra H;
letra = mensaje.charAt(2);//letra L
alert(letra);
*/
// //////

// var mensaje="holaaaa";
// var posicion=mensaje.indexOf('a');//posicion=3
// alert(posicion);
// posicion=mensaje.indexOf('b');//posicion=-1
// ////

// var mensaje="holaaa";
// var posicion=mensaje.lastIndexOf('a');//posicion=5;
// alert(posicion);
// posicion=mensaje.lastIndexOf('b');//posicion=-1;

// /////


// var mensaje="hola mundo";
// var posicion=mensaje.substring(2);//posicion=la mundo
// posicion=mensaje.substring(5,7);//posicion=mun
// posicion=mensaje.substring(7);//  posicion= ndo;
// posicion=mensaje.substring(1,8);//posicion=ola mun
// posicion=mensaje.substring(3,4);//posicion=a
// posicion=mensaje.substring(5,0);//posicion=  hola
// posicion=mensaje.substring(0,5);//posicion=hola

//////////////////////////////////////////////////////////////////////////////////////////////

// var mensaje="hola mundo, soy una cadena de texto";
// var palabra="hola";
// var palabras=mensaje.split(" ");
// alert(palabras);
// var letras=palabra.split("");
// alert(letras);

// //////////////////////////////////////////////////////////////////////////////////////////////


// var vocales=["a","e","i","o","u"];
// var numerovocales=vocales.length;
// alert(numerovocales);
// //////////////////////////////////////////////////////////////////////////////////////////////

// var array =["hola","mundo"];
// var mensaje=array.join("");//mensaje=holamundo
// alert(mensaje);
// mensaje=array.join(" ");//mensaje=hola mundo
// //////////////////////////////////////////////////////////////////////////////////////////////

// var array=[1,2,3];
// var ultimo=array.pop();
// alert(ultimo);//ahora arrat=[2,3],ultimo=3
// //////////////////////////////////////////////////////////////////////////////////////////////

// var array=[1,2,3];
// array.push(4);//ahora array=[1,2,3,4]
// alert(array);
// //////////////////////////////////////////////////////////////////////////////////////////////

// var array=[1,2,3];
// var primero=array.shift();//ahora array =[2,3];primero=1
// alert(primero);
// //////////////////////////////////////////////////////////////////////////////////////////////

// var array=[1,2,3];
// array.unshift(0);//ahora array=[0,1,2,3]
// alert(array);

//////////////////////////////////////////////////////////////////////////////////////////////
// var array=[1,2,3];
// array.reverse();//ahora array=[3,2,1]
// alert(array);
// //////////////////////////////////////////////////////////////////////////////////////////////
// var numero1=0;
// var numero2=0;
// if(isNaN(numero1/numero2)){
//     alert("la division no esta definida para los numeros indicados");
// }else{
//     alert("la division es igual="+numero1/numero2);
// }
// //////////////////////////////////////////////////////////////////////////////////////////////
// var numero1=10;
// var numero2=0;
// alert(numero1/numero2);
// //////////////////////////////////////////////////////////////////////////////////////////////

// var numero1=4564.34567;
//  var resul=numero1.toFixed(2);//4564.35
// alert(resul);
// resul=numero1.toFixed(6);//4564.645670
// alert(resul);
// resul=numero1.toFixed();//4564
// alert(resul);
//////////////////////////////////////////////////////////////////////////////////////////////

//EJEMPLOS DE LAS FUNCIONES
// function sumu_y_resta(){
//     resultado = numero1+numero2;
//    alert("la suma es="+ resultado);
// }
// var numero1=parseInt(prompt("ingrese el numero 1="));
// var numero2=parseInt(prompt("ingrese el numero 2="));
// var resultado;
// sumu_y_resta();
//////////////////////////////////////////////////////////////////////
//DEFINICION DE LA FUNCION
function calulaPrecioTotal(precio) {
    var impuestos = 1.16;
    var gastosEnvio = 10;
    var precioTotal = (precio * impuestos) + gastosEnvio;
    alert(precioTotal);
}
//llamada a la funcion y aguarda en una variable el resulatado 
var precioTotal = calulaPrecioTotal(23.34);

