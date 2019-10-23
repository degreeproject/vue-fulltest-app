<template lang="html">

  <v-container class="grey lighten-5">
    <v-btn dark fab top left color="blue" to="/recipes/create-recipe">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!-- <v-row no-gutters>
      <v-col v-for="(recipe, index) in this.recipes"  :key="index" cols="12" sm="4">
        <v-card :to="'/recipes/' + recipe.id" class="mx-auto" :outlined="true">
          <v-img class="white--text" height="150px" :src="recipe.image">
            <v-card-title class="align-end fill-height">{{recipe.name}}</v-card-title>
          </v-img>
          <v-card-text>{{recipe.description}}</v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
    <recipePreviewComponent :recipes="localRecipes"/>

  </v-container>

</template>

<script>
import { mapState } from "vuex";
import RecipeService from "../../services/RecipeService.js";
import recipePreviewComponent from "./recipePreview/recipePreviewComponent"
export default {
  name: "RecipesComponent",
  props: [],
  components: {
    recipePreviewComponent,
  },
  data() {
    return {
      localRecipes: [],
    };
  },
  mounted() {
    /**
     * Checks if the recipes exists in global state and
     * if true uses them, otherwise gets them from the database.
     */
    if (this.recipes.length !== 0) {
      this.localRecipes = this.recipes;
    } else {
      RecipeService.getRecipes()
        .then(res => {
          this.localRecipes = res.data;
        })
        // eslint-disable-next-line no-console
        .catch(console.log);
    }
  },
  methods: {},
  computed: {
    ...mapState("recipeModule", ["recipes"])
  }
};
</script>

<style scoped>
.RecipeComponent {
}
</style>