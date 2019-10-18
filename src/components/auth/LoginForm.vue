<template lang="html">
<div>
  <span v-if="invalidSubmit">Something went wrong with the login, please try again.</span>
  <v-form ref="form" lazy-validation>
    <v-text-field v-model="form.username" :counter="16" label="Username" required></v-text-field>
    <v-text-field type="password" v-model="form.password" label="Password" required></v-text-field>
    <v-btn color="success" class="mr-4" @click="onSubmit">
      Login
    </v-btn>
    <v-btn color="error" class="mr-4" @click="reset">
      Reset
    </v-btn>
  </v-form>
</div>

</template>

<script>
import AuthService from "../../services/AuthService.js";
import { mapActions } from "vuex";
import Store from "../../store";
export default {
  name: "LoginForm",
  props: [],
  data: () => ({
    invalidSubmit: false,
    form: {
      username: "",
      password: ""
    }
  }),
  mounted() {
    Store.userModule;
  },

  methods: {
    /**
     * Maps the state to this component so that it is usable
     */
    ...mapActions("userModule", ["logIn"]),

    /**
     * Authenticates the user and on success adds the 
     * user as logged in in global state and in local storage
     */
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        let user = null;
        await AuthService.loginUser(this.form).then(data => {
          user = {
            name: data.name,
            token: `${data.token_type} ${data.access_token}`
          };
          this.logIn(user);
        });
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/home");
      } catch (err) {
        this.invalidSubmit = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {}
};
</script>

<style scoped>
.RecipeComponent {
}
</style>
