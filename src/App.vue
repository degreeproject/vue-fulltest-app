<template>
  <v-app id="inspire">
    <Header/>
    <v-content>
      <v-container style="width: 75%">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/HeaderComponent";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({
    //
  })
};
</script>