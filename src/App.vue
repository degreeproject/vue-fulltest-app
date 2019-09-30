<template>
    <v-app id="inspire">
    <Header></Header>
    <v-content>
      <v-container >
        <router-view/>
      </v-container>
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