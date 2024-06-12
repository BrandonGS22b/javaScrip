Vue.component('padre', {
    template:
        `
                <div class="p-5 bg-dark text-white" >
                <h2>componente padre: {{numeroPadre}}</h2>
                <button class="btn btn-danger" @click="numeroPadre++"></button>
                <hijo :numero="numeroPadre" @nombreHIJO=nombrePadre = $event"> </hijo>
                
                
                
                
                </div>
                `,
                data() {
                    return {
                        numeroPadre: 0,
                        nombrePadre: ''
                    }
                },
})