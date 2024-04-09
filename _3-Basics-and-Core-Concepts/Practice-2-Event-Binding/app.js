const app = Vue.createApp({
    data() {
        return {
            paraOutput: '',
            paraOutput2: '',

        }
    },

    methods: {
        handleAlert(){
            alert('A button was clicked!');
        },

        handleInput(event, text){
            this.paraOutput = text + event.target.value;
        },

        confirmedInput(event){
            this.paraOutput2 = event.target.value;
        }
    }
})

app.mount('#assignment')