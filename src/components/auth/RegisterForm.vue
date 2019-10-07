<template lang="html">
<div>
  <span v-if="invalidSubmit">Something went wrong with the registration, please try again.</span>
  <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="username" :counter="16" :rules="usernameRules" label="Username" required></v-text-field>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="firstname" :counter="30" :rules="firstnameRules" label="Firstname" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="lastname" :counter="30" :rules="lastnameRules" label="Lastname" required></v-text-field>
          </v-col>
        </v-row>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-row>
          <v-col cols="12" md="6">
              <v-text-field type="password" v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
              <v-text-field type="password" v-model="repeatpassword" :rules="repeatPasswordRules" label="Repeat password" required></v-text-field>
          </v-col>
        </v-row>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="register">
      Register
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset
    </v-btn>
  </v-form>
</div>

</template>

<script>
import AuthService from "../../services/AuthService.js";
export default {
  name: "RegisterForm",
  props: [],
  data: () => ({
    valid: true,
    invalidSubmit: false,
    username: "",
    usernameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 16) || "Username must be less than 16 characters"
    ],
    firstname: "",
    firstnameRules: [
      v => !!v || "Firstname is required",
      v => (v && v.length <= 30) || "Firstname must be less than 30 characters"
    ],
    lastname: "",
    lastnameRules: [
      v => !!v || "Lastname is required",
      v => (v && v.length <= 30) || "Lastname must be less than 30 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be more than 7 characters"
    ],
    repeatpassword: ""
  }),

  methods: {
    register() {
      AuthService.registerUser({
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      });
      this.$refs.form.reset();
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    repeatPasswordRules() {
      return [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password must be more than 7 characters",
        () => this.password === this.repeatpassword || "Password must match"
      ];
    }
  }
};
</script>

<style scoped>
.RecipeComponent {
}
</style>
