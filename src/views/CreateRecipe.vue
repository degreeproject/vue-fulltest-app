<template>
  <div class="recipes">
    <CreateRecipe />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateRecipe from "@/components/recipes/CreateRecipeComponent.vue";

export default {
  name: "recipe",
  components: {
    CreateRecipe
  }
};
</script>
