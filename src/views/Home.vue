<template>
  <div class="home">
    <h1 v-if="!loggedIn">Not logged in</h1>
    <h1 v-if="loggedIn">Welcome {{this.user.name}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
  },
  computed: {
    ...mapState('userModule', ['user']),
    loggedIn() {
      return this.user.token !== null;
    }
  },
}
</script>
