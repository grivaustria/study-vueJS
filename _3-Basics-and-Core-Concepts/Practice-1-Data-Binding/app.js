const app = Vue.createApp({
    data: () => {
        return {
            name: prompt('Enter your name: '),
            birthYear: prompt('Enter your birthyear: '),
            imgLink: 'https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg',
            textValue: 'Hello World!'
        };
    },
    
    methods: {
        outputName(){
            return this.name;
        },

        outputAge(){
            return this.currentYear() - this.birthYear;
        },

        outputAgeIn5Years(){
            return this.currentYear() + 5 - this.birthYear;
        },

        currentYear(){
            const current = new Date();
            const date = current.getFullYear()
            return date;
        },

        outputRandomNum(){
            const randomNumber = Math.random().toFixed(2);
            return randomNumber;
        }

    }
});

app.mount('#assignment');