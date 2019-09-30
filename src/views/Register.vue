<template>
  <div class="register">
    <h1>Sign-up</h1>
    <RegisterForm/>  
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/auth/RegisterForm.vue'

export default {
  name: 'register',
  components: {
    RegisterForm,
  }
}
</script>
