const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },

  methods:{
    confirmedInput(){
      this.confirmedName = this.name
    },

    submitForm(event){
      event.preventDefault();
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    setName(event, text){
      this.name = text + ' ' + event.target.value;
    }
  }
});

app.mount('#events');
