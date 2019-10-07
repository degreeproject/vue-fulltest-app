<template>
  <div class="recipes">
    <h1>This is a recipe page</h1>
    <Recipes></Recipes>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipes from '@/components/RecipesComponent.vue'

export default {
  name: 'recipes',
  components: {
    Recipes
  }
}
</script>
