<template>
  <div class="recipes">
    <Recipes></Recipes>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from "@/components/recipes/RecipesComponent.vue";

export default {
  name: "recipes",
  components: {
    Recipes
  }
};
</script>
