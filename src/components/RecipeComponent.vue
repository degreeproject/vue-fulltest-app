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

      <span v-if="invalidSubmit">Something went wrong with the comment, please try again.</span>
        <v-form ref="commentForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="10">
              <v-text-field v-model="comment.comment" :counter="300" :rules="commentRules" label="Comment" required></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitComment">
                Submit
              </v-btn>
          </v-col>
          </v-row>
        </v-form>


      <CommentComponent :comments="this.recipe.comments"/>
    </v-container>

</template>

<script>
import RecipeService from "../services/RecipeService.js";
import CommentComponent from "./comment/CommentComponent"
import { mapState } from "vuex";
export default {
  name: "RecipeComponent",
  components:{
    CommentComponent,
  },
  props: [],
  data() {
    return {
      valid: true,
      invalidSubmit: false,
      recipe: {},
      recipeId: this.$router.currentRoute.params.id,
      comment: {
        commentator: "",
        comment: ""
      },
      commentRules: [
        v => !!v || "A comment is required",
        v =>
          (v && v.length <= 300) || "The name must be less than 300 characters"
      ]
    };
  },
  mounted() {
    /**
     * When component gets mounted checks if recipes exist in global state and
     * uses them if true, otherwise fetch them from the database.
     */
    if (this.recipes.length !== 0) {
      const recipe = this.recipes.find(ele => {
        return ele.id === this.recipeId;
      });
      this.recipe = recipe;
    } else {
      RecipeService.getRecipe(this.recipeId).then(res => {
        this.recipe = res.data;
      });
    }
  },
  computed: {
    ...mapState("userModule", ["user"]),
    ...mapState("recipeModule", ["recipes"])
  },
  methods: {
    /**
     * Adds a comment to the recipe in the database with
     * the corresponding id of the recipe the user is on.
     */
    submitComment() {
      let username = this.user.name;
      let comment = {
        commentator: username,
        comment: this.comment.comment
      };
      RecipeService.submitComment({
        commentator: username,
        comment: this.comment.comment,
        recipe: this.recipe.id
      }).then(res => {
        this.recipe.comments = this.recipe.comments.concat(comment);
        return res;
      });
    }
  }
};
</script>

<style scoped>

</style>