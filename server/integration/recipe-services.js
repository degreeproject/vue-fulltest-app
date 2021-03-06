/* eslint-disable no-console */
const mongodb = require('mongodb');
const config = require('../config');

const DUPL_RECIPETITLE = 11000;
class RecipeService {
   /**
   * Loads the recipe collection from MongoDB
   */
  static async loadRecipeCollection() {
    const client = await mongodb.MongoClient.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    return client.db('kex-test-app').collection('recipes');
  }
  /**
   * Gets all the recipes from the database
   */
  static async getRecipes() {
    try {
      const recipeCollection = await this.loadRecipeCollection();
      const recipes = await recipeCollection.find().toArray()
      if (recipes.length === 0 || !recipes)
        console.log("No recipes found in getRecipes")
      return recipes;
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Gets a specific recipe from the database with the corresponding id
   * @param {*} id The id of the recipe that is going to be fetched
   */
  static async getRecipe(id) {
    try {
      const recipeCollection = await this.loadRecipeCollection();
      const recipe = await recipeCollection.findOne({id: id})
      if (!recipe || recipe.length === 0)
        console.log("No recipes found in getRecipes")
      return recipe;
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Adds a recipe to the database
   */
  static async submitRecipe(recipe) {
    try {
      const recipeCollection = await this.loadRecipeCollection();
      const newRecipe = {
        name: recipe.name,
        // Problem with single word names?
        id: recipe.name.replace(/ /g, "-").toLowerCase(),
        description: recipe.description,
        image: recipe.image,
        ingredient: recipe.ingredient,
        step: recipe.step,
        notes: recipe.notes,
        comments: []
      };

      await recipeCollection.insertOne(newRecipe);
    } catch (err) {
      if (err.code === DUPL_RECIPETITLE)
        throw new Error('A recipe with that title already exists').code(500);

      throw new Error('Database error').code(500);
    }
  }

  /**
   * Adds a comment to the recipe with the same id as the comment.recipe field.
   * @param {*} comment The comment object that is being added to the database
   */
  static async submitComment(comment) {
    try {
      const recipeCollection = await this.loadRecipeCollection();
      const newcomment = {
        commentator: comment.commentator,
        comment: comment.comment
      };
      await recipeCollection.updateOne(
        {id: comment.recipe},
        {$push: { comments: newcomment}});
    } catch (err) {
      throw new Error('Database error').code(500);
    }
  }
}

module.exports = RecipeService;