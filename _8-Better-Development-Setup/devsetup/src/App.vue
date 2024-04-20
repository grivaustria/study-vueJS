<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
  
  
</template>

<script>
export default {
  data() {
    return{
      friends: [
        {
          id: '01',
          name: 'John Doe',
          phone: '0912-345-6789',
          email: 'jdoe@example.com',
        },
        {
          id: '02',
          name: 'Mary Jones',
          phone: '0998-765-4321',
          email: 'mjones@example.com',
        },
      ]
    }
  },
}
</script>
