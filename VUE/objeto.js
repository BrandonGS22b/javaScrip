const app = new Vue({
    el: '#app',
    data:{
        titulo:'marcos de trabajos UTS',
        
        equipos:[
            {nombre:'Nacional',ciudad:'Bucaramanga',posicion:1},
            {nombre:'bucaramanga',ciudad:'medellin',posicion:2},
            {nombre:'America',ciudad:'cali',posicion:3}
        ],
        NUEVOEQUIPO: ''
    },
    methods:{
        Agregarequipo(){
            this.equipos.push({
                nombre: this.NUEVOEQUIPO,ciudad:'prueba',posicion:4
            })
            this.NUEVOEQUIPO='';
        }
    },
    computed:{
        sumarpuntos(){
            this.total=0;
            for(equipos of this.equipos){
                this.total=this.total + equipos.puntos
            }
            return this.total;
        }
    }
    })