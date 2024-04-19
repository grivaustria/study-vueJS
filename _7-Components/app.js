const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: '01',
                    name: 'John Doe',
                    phone: '0912-345-6789',
                    email: 'john@example.com',
                },
                {
                    id: '02',
                    name: 'Mary Jones',
                    phone: '0998-765-4321',
                    email: 'mjones@example.com',
                }
            ]
        }
    },

    methods: {
        // code here
    }
});

app.component('friend-contact', {
    template: `
        <li v-for="friend in friends" :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ visibleDetails ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="visibleDetails">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data(){
        return{
            visibleDetails: false,
            friends: [
                {
                    id: '01',
                    name: 'John Doe',
                    phone: '0912-345-6789',
                    email: 'john@example.com',
                },
            ]
        }
    },

    methods: {
        toggleDetails(){
            this.visibleDetails = !this.visibleDetails;
        }
    }
})

app.mount('#app')
