// href - retorna la url de la pagina actual
console.log(location.href);

//hostname -retorna el hotos de la pagina actual

console.log(location.hostname);

//pathname - retorna la ruta aarchivo de la pagina actual

console.log(location.pathname);

//protocolo1- retorna el protocolo actualizado 



console.log(location.protocol);

//con esto podremos cargar el documento
const cargarDocumento = () => {
    location.assign('https://google.com');

}

const regresar =()=> { 
    history.back();


}; 

const irAdelante=() => {
    history.forward();



};