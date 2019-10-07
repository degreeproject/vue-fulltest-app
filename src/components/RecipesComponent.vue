<template lang="html">

  <v-container class="grey lighten-5">
    <v-btn dark fab top left color="blue" to="/recipe/create-recipe">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row no-gutters>
      <v-col v-for="(recipe, index) in this.recipes"  :key="index" cols="12" sm="4">
        <v-card :to="'/recipe/' + recipe.id" class="mx-auto" :outlined="true">
          <v-img class="white--text" height="150px" :src="recipe.image">
            <v-card-title class="align-end fill-height">{{recipe.name}}</v-card-title>
          </v-img>
          <v-card-text>{{recipe.description}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import RecipeService from "../services/RecipeService.js";
  export default {
    name: "RecipesComponent",
    props: [],
    data() {
      return {
        recipes: [],
      };
    },
    mounted() {
      RecipeService.getRecipes()
        .then(res => {
          this.recipes = res.data;
        });
    },
    methods: {},
    computed: {}
  };
</script>

<style scoped>
  .RecipeComponent {}
</style>