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
        },
        editarTarea:function(index){
this.tarea[index].estado=true;
        }

    }
})