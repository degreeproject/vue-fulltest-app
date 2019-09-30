<template lang="html">

  <section class="RecipeComponent">
    <h1>Recipe Component</h1>
    <ul>
      <li :key="recipe.id" v-for="recipe in recipes">
        {{recipe}}
      </li>
    </ul>
  </section>

</template>

<script>
import RecipeService from "../services/RecipeService.js";
export default {
  name: "RecipeComponent",
  props: [],
  mounted() {
    RecipeService.getRecipes().then(res => {
      this.recipes = res.data;
    });
  },
  data() {
    return {
      recipes: []
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.RecipeComponent {
}
</style>
