const autos =['toyota', 'nissan','kia','toyota', 'nissan','kia'];

autos[1] = "renault";
autos.push(" volvo");

for(let i = 0 ; i < autos.length ; i++) {
 console.log(i + ':'+autos[i]);	


}

//en la linea 3 hagarramos el campo de kia se modicara de kia a renault