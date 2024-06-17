//las promesas son estructuras que nosotros vamosa a poder definir para poderle decir al navegador que queremos que espere a que nosotros terminemos de hacer una operacion

//y que cuado termine de hacer la operacion nosotros le respondemos con los datos



//vamos a definir nuestras promesas

const promesa = new Promise((resolve,reject) => {
    //accion que se ejecutara
    //como no tenemos una base de datos vamos a simular que una operacion tarda tiempo
    setTimeout(() => {
        const  exito = true;
        if(exito) {
            resolve("la operacion tuvo exto");

        } else {
            reject ('la operacion no tuvo exito')
        
        };
        
        
    }, 4000);
    
    
});
promesa.then((mensaje) => {

    alert(mensaje);

});

promesa.catch ((mensaje) => {
    alert (mensaje);
});
promesa.catch((mensaje) => {
    alert (mensaje);


});

