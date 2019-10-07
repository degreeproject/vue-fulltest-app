<template lang="html">

    <v-container class="grey lighten-5">
      <h1>{{this.recipe.name}}</h1>
      <v-row no-gutters cols="12">
        <v-col sm="4">
          <v-img :src="this.recipe.image" contain>
          </v-img>
        </v-col>
        <v-col sm="8">
          <h3>Ingredients</h3>
          <v-list-item v-for="(ingredient, index) in this.recipe.ingredient" :key="index">
          <v-col sm="8">
            <v-list-item-content>
              <v-list-item-title>{{ingredient.name}}</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col sm="2">
            <v-list-item-content>
              <v-list-item-title v-if="ingredient.amount">{{ingredient.amount}}</v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col sm="2">
            <v-list-item-content>
              <v-list-item-title v-if="ingredient.unit">{{ingredient.unit}}</v-list-item-title>
            </v-list-item-content>
          </v-col>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row no-gutters cols="12">
        <v-col sm="6">
            <h3>Instructions</h3>
          <v-list-item-content v-for="(step, index) in this.recipe.step" :key="index">
            <v-list-item-content>{{step.description}}</v-list-item-content>
          </v-list-item-content>
        </v-col>
        <v-col sm="6">
          <h3>Notes</h3>
          <v-list-item-content>
            {{this.recipe.notes}}
          </v-list-item-content>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row no-gutters cols="12">
        <v-col sm="12">
          <h3>Comments</h3>
          <v-list-item-content v-for="(comment, index) in this.recipe.comments" :key="index">
            <v-list-item-title>{{comment.commentator}}</v-list-item-title>
            <v-list-item-content>{{comment.comment}}</v-list-item-content>
          </v-list-item-content>
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
    import RecipeService from "../services/RecipeService.js";
    export default {
      name: "RecipeComponent",
      props: [],
      data() {
        return {
          recipe: {},
          recipeId: this.$router.currentRoute.params.id
        };
      },
      mounted() {
        RecipeService.getRecipe(this.recipeId)
          .then(res => {
            this.recipe = res.data;
          });
      },
      methods: {},
      computed: {}
    };
</script>

<style scoped>
    .RecipeComponent {}
</style>