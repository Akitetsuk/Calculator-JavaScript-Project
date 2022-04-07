
Vue.createApp({
    data() {
        return {
            text: '',
            result: ''
        }
    },
    methods: {
        keyPressed(e) {

            console.log( this.text = e.target)

            // 1. obtener el valor del atributo data-num ed e.target

            // 2. Acumular ese valor en el this.result
            // 3. Detectar si han pulsado la tecla '=' para llamar al método this.evaluar()
        },

        // evaluar() {
        //   this.text = eval(this.text);
        // }
    }
}).mount('#app')




