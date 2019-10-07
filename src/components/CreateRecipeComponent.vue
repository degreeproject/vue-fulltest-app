<template lang="html">
<div>
  <span v-if="invalidSubmit">Something went wrong with the registration, please try again.</span>
  <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="this.recipes.name" :counter="30" :rules="nameRules" label="Title" required></v-text-field>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="this.recipes.description" :counter="30" :rules="descriptionRules" label="Description" required></v-text-field>
          </v-col>
        </v-row>
      <v-text-field v-model="this.recipes.image" :rules="imageRules" label="Image URL" required></v-text-field>
        <v-row v-for="(ingredient, index) in this.recipes.ingredient" :key="index">
          <v-col cols="12" md="5">
              <v-text-field v-model="ingredient.name" :rules="ingredientNameRules" label="Ingredient" required></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
              <v-text-field v-model="ingredient.amount" :rules="ingredientAmountRules" label="Amount" required></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
              <v-text-field v-model="ingredient.unit" label="Unit"></v-text-field>
          </v-col>
          <v-col cols="12" md="2" v-if="index === 0">
              <v-btn color="primary" @click="addIngredient">Add</v-btn>
          </v-col>
          <v-col cols="12" md="2" v-if="index !== 0">
              <v-btn color="primary" @click="removeIngredient(index)">Remove</v-btn>
          </v-col>
        </v-row>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitRecipe">
      Create Recipe
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset
    </v-btn>
  </v-form>
</div>

</template>

<script>
// import RecipeService from '../services/RecipeService'
export default {
  name: "CreateRecipeForm",
  props: [],
  data: () => ({
    valid: true,
    invalidSubmit: false,
    recipes: {
      name: "",
      description: "",
      image: "",
      ingredient: [{
        name: "",
        amount: "",
        unit: ""
      }],
      steps: [{
        instruction: ""
      }],
      notes: "",
    },
    nameRules: [
      v => !!v || "A name is required",
      v => (v && v.length <= 30) || "The name must be less than 30 characters"
    ],
    descriptionRules: [
      v => !!v || "A description is required",
      v => (v && v.length <= 30) || "The description must be less than 30 characters"
    ],
    imageRules: [
      v => !!v || "Image is required",
      v => (v && v.length > 5) || "Image URL must be more than 5 characters"
    ],
    ingredientRules: [
      v => !!v || "An ingredient is required",
    ],
    ingredientNameRules: [
      v => !!v || "An ingredient name is required",
    ],
    ingredientAmountRules: [
      v => !!v || "Amount is required",
    ],
    stepsRules: [
      v => !!v || "Instructions are required",
    ]
  }),
  mounted() {
  },

  methods: {
    addIngredient(){
      this.recipes.ingredient.push({
          name: '',
          amount: '',
          unit: '',
      });
      // eslint-disable-next-line no-console
      console.log(this.recipes)
    },
    removeIngredient(index){
      this.recipes.ingredient = this.recipes.ingredient.filter((value, i) => index !== i)
    },
    submitRecipe() {
      
      // RecipeService.submitRecipe({

      // });
      this.$refs.form.reset();
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
  }
};
</script>

<style scoped>
.RecipeComponent {
}
</style>
