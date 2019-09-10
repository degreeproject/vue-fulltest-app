<template lang="html">

  <section class="UserTestComponent">
    <h1>UserTest Component</h1>
    <ul>
      <li :key="user.id" v-for="user in users">
        {{user}}
      </li>
    </ul>
  </section>

</template>

<script>
import UserService from '../services/UserService.js'
  export default  {
    name: 'UserTestComponent',
    props: [],
    mounted() {
      UserService.getUsers()
      .then((res) => {
        this.users = res.data;
      })
    },
    data() {
      return {
        users: [],

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
  .UserTestComponent {

  }
</style>
