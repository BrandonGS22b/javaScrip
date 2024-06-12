const app = new Vue ({
    el: '#app',
    data: {
        mensaje: '  Marcos de Trabajo',
        contador: 30
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    }
})