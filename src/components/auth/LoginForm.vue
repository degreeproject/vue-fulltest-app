<template lang="html">

<v-form ref="form" lazy-validation>
    <v-text-field v-model="username" :counter="16" label="Username" required></v-text-field>
    <v-text-field type="password" v-model="password" label="Password" required></v-text-field>
    
  <v-btn color="success" class="mr-4" @click="login">
    Login
  </v-btn>

  <v-btn color="error" class="mr-4" @click="reset">
    Reset
  </v-btn>
</v-form>

</template>

<script>
import AuthService from '../../services/AuthService.js'
  export default  {
    name: 'LoginForm',
    props: [],
    mounted() {
    },
    data: () => ({
      username: '',
      password: ''
    }),

    methods: {
      login () {
        AuthService.loginUser({
          'username': this.username,
          'password': this.password
          })
        this.$refs.form.reset();
      },
      reset () {
        this.$refs.form.reset()
      },
    },
    computed: {
    }
}
</script>

<style scoped>
  .RecipeComponent {

  }
</style>
