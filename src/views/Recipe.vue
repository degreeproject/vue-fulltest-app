<template>
  <div class="recipes">
    <Recipe></Recipe>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from "@/components/RecipeComponent.vue";

export default {
  name: "recipe",
  components: {
    Recipe
  }
};
</script>
