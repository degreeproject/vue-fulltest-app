<template>
    <v-app id="inspire">
    <Header></Header>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/HeaderComponent'

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>