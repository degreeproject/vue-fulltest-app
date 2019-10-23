<template lang="html">
  <div>
    <v-row no-gutters>
      <v-col v-for="(recipe, index) in recipes"  :key="index" cols="12" sm="4">
        <v-card :to="'/recipes/' + recipe.id" class="mx-auto" :outlined="true">
          <v-img class="white--text" height="150px" :src="recipe.image">
            <v-card-title class="align-end fill-height">{{recipe.name}}</v-card-title>
          </v-img>
          <v-card-text>{{recipe.description}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: "RecipePreviewComponent",
  props: ['recipes'],
};
</script>

<style scoped>
#commentator {
  font-weight: bold;
}
</style>
