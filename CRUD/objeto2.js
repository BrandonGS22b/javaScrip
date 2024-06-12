const app = new Vue({
    el:'#app',
    data:{
        titulo:'CRUD con Vue',
        tarea: [],
        nuevatarea: ' '
    },
    methods:{
        agregartarea: function(){
            this.tarea.push({
                nombre: this.nuevatarea,
                estado:false
            });
            
            this.nuevatarea=' ';
            localStorage.setItem('equipos-vue',JSON.stringify(this.tarea));
        },
        editarTarea:function(index){
this.tarea[index].estado=true;
localStorage.setItem('equipos-vue',JSON.stringify(this.tarea));

        },
        eliminar:function(index){
            this.tarea.splice(index,1);
            localStorage.setItem('equipos-vue',JSON.stringify(this.tarea));

        }

    },
    created:function(){
        let datosDB =JSON.parse(localStorage.getItem('equipos-vue'));
        if(datosDB==null){
            this.tarea= [];
        }else{
            this.tarea=datosDB;
        }
    }
})