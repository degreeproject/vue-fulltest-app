<template lang="html">
<div>
  <span v-if="invalidSubmit">Something went wrong with the registration, please try again.</span>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="recipe.name" :counter="40" :rules="nameRules" label="Title" required></v-text-field>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="recipe.description" :counter="50" :rules="descriptionRules" label="Description" required>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="recipe.image" :rules="imageRules" label="Image URL" required></v-text-field>
      </v-col>
    </v-row>
    <v-row v-for="(ingredient, index) in this.recipe.ingredient" :key="index">
      <v-col cols="12" md="5">
        <v-text-field v-model="ingredient.name" :rules="ingredientNameRules" :label="'Ingredient: ' + (index+1)"
          required></v-text-field>
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
        <v-btn color="error" @click="removeIngredient(index)">Remove</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="(step, index) in recipe.step" :key="((index + 1) * 100)">
      <v-col cols="12" md="10">
        <v-text-field v-model="step.description" :rules="StepDescriptionRules" :label="'Instruction: ' + (index+1)"
          required></v-text-field>
      </v-col>
      <v-col cols="12" md="2" v-if="index === 0">
        <v-btn color="primary" @click="addStep">Add</v-btn>
      </v-col>
      <v-col cols="12" md="2" v-if="index !== 0">
        <v-btn color="error" @click="removeStep(index)">Remove</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field v-model="recipe.notes" label="Notes"></v-text-field>
      </v-col>
    </v-row>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitRecipe">
      Create Recipe
    </v-btn>
  </v-form>
</div>

</template>

<script>
import RecipeService from "../../services/RecipeService";
export default {
  name: "CreateRecipeForm",
  props: [],
  data: () => ({
    valid: true,
    invalidSubmit: false,
    recipe: {
      name: "",
      description: "",
      image: "",
      ingredient: [
        {
          name: "",
          amount: "",
          unit: ""
        }
      ],
      step: [
        {
          description: ""
        }
      ],
      notes: ""
    },
    nameRules: [
      v => !!v || "A title is required",
      v => (v && v.length <= 40) || "The title must be less than 40 characters"
    ],
    descriptionRules: [
      v => !!v || "A description is required",
      v =>
        (v && v.length <= 50) ||
        "The description must be less than 50 characters"
    ],
    imageRules: [
      v => !!v || "Image is required",
      v => (v && v.length > 5) || "Image URL must be more than 5 characters"
    ],
    ingredientRules: [v => !!v || "An ingredient is required"],
    ingredientNameRules: [v => !!v || "An ingredient name is required"],
    ingredientAmountRules: [v => !!v || "Amount is required"],
    StepDescriptionRules: [v => !!v || "An instruction is required"]
  }),
  methods: {
    /**
     * Adds a new set of input fields to the ingredient input
     */
    addIngredient() {
      this.recipe.ingredient.push({
        name: "",
        amount: "",
        unit: ""
      });
    },
    /**
     * Removes a set of input fields from the ingredient input where the id matches
     * @param index The index of the ingredient to remove
     */
    removeIngredient(index) {
      this.recipe.ingredient = this.recipe.ingredient.filter(
        (value, i) => index !== i
      );
    },
    /**
     * Adds a new input field to the instructions input
     */
    addStep() {
      this.recipe.step.push({
        description: ""
      });
    },
    /**
     * Removes a input field from the instructions input
     * @param index The index of the instruction to remove
     */
    removeStep(index) {
      this.recipe.step = this.recipe.step.filter((value, i) => index !== i);
    },
    async submitRecipe() {
      event.preventDefault();
      try {
        await RecipeService.submitRecipe(this.recipe);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    /**
     * Resets the form
     */
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
.RecipeComponent {
}
</style>
