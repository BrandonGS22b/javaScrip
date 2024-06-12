const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'mensaje cambiado'
    },

    beforeCreate() {
        console.log('beforeCreate');

    },
    created(){
        //al crear los metodos , observamos ,eventos, pero aun no accede al dom
        //aun no accede a 'el'
        console.log('created');
    },
    beforeMount() {

        //se ejecuta ante de insertar el DOM
        console.log('beforeMount');
        
    },
    mounted() {
        //se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate() {
        //al detectar un cambio
        console.log('beforeUpdate');

    },
    updated() {
        console.log('updated');

    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
    methods: {
        destruir(){
            this.$destroy();



        }
    },




})