<template>
  <v-app-bar app color="blue" dark>
    <router-link id="header-title" to="/">
      <v-toolbar-title>Tasty Recipes</v-toolbar-title>
    </router-link>

    <!-- Fills in navbar which moves icons to the right -->
    <div class="flex-grow-1"></div>

    <v-btn class="navbutton" light to="recipes">Recipes</v-btn>

    <v-btn class="navbutton" light to="calendar">Calendar</v-btn>

    <v-menu offset-y v-if="!loggedIn">
      <template v-slot:activator="{ on }">
        <v-btn light v-on="on">User</v-btn>
      </template>

      <v-list>
        <v-list-item to="login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item to="register">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-if="loggedIn" class="navbutton" light @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "HeaderComponent",
  mounted() {
    this.addTokenToState();
  },
  computed: {
    ...mapState('userModule', ['user']),
    loggedIn() {
      return this.user.token !== null;
    }
  },
  methods: {
    ...mapActions('userModule', ['logOut', 'addToken']),
    logout(){
        this.logOut();
        localStorage.clear();
        this.$router.push('/login');
    },
    addTokenToState(){
      if(localStorage.getItem('user')){
      let token = JSON.parse(localStorage.getItem('user'))
      this.addToken(token)
    }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbutton {
  margin-right: 0.5%;
}
#header-title {
  text-decoration: none;
  color: white;
}
</style>