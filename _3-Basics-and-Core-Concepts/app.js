const app = Vue.createApp({
    data: () => {
        return{
            courseGoal: 'Finish the course and master Vue!',
            vueLink: 'https://vuejs.org',
        }
    },
    

    methods: {
        outputGoal: () => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return 'Learn Vue!';
            } else {
                return 'You have finally mastered Vue!';
            }
        }
    }
});

app.mount("#user-goal");