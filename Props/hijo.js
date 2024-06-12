Vue.component('hijo', {
    template:
        `
                <div class="p-5 bg-success text-white" >
                <h4>componente hijo {{numero}}</h4>


                </div>
                `,
                props :['numero']
})