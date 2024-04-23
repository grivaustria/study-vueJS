<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
  
  
</template>

<script>

export default {
  data() {
    return{
      // friends: [
      //   {
      //     id: '01',
      //     name: 'John Doe',
      //     phone: '0912-345-6789',
      //     email: 'jdoe@example.com',
      //   },
      //   {
      //     id: '02',
      //     name: 'Mary Jones',
      //     phone: '0998-765-4321',
      //     email: 'mjones@example.com',
      //   },
      // ]
    }
  },
}
</script>

<style scoped>


header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

</style>