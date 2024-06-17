const obtenerPostDeUsuario = (Usuario,callback) => {
    console.log('obtenerPostDeUsuario de ${Usuario} ...');

    setTimeout(() => {
       let posts = ['Post1','Post2','Post3'];
       callback(posts);
    }, 2000);
};


//es importante esta parte en esta funcion me va devolver algo
obtenerPostDeUsuario('Brandon', (posts) => {
    console.log(posts);
});