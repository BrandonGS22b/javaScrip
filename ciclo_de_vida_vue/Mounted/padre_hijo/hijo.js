Vue.component('hijo', {
    template:
        `
                <div class="p-5 bg-success text-white" >
                <h4>componente hijo {{numero}}</h4>
                <h4>Nombre : {{nombre}}</h4>


                </div>
                `,
                props :['numero'],
                data(){
                    return{
                        nombre:'victor ochoa'





                    }



                },
                mounted() {
                    this.$emit('nombreHijo', this.nombre);
                }
})