import axios from "./RequestObject";

const RECIPE = "/api/recipe";
const COMMENT = "/api/recipe/comment";

class RecipeService {
  /**
   * Gets all the recipes and returns them
   */
  static getRecipes() {
    return axios.get(RECIPE).then(function(response) {
      return {
        ...response
      };
    });
  }

  /**
   * Gets a specific recipe matching the id
   * @param {*} id of the recipe to get
   */
  static getRecipe(id) {
    return axios.get(RECIPE + "/" + id).then(function(response) {
      return {
        ...response
      };
    });
  }

  /**
   * Adds a recipe to the database
   * @param {*} recipe The recipe that will be added
   */
  static submitRecipe(recipe) {
    return axios.post(RECIPE, recipe);
  }

  /**
   * Adds a comment to the id that is contained in the comment object
   * @param {*} comment the comment object and the id which 
   * symbolises which recipe the comment should be added to
   */
  static submitComment(comment) {
    return axios.post(COMMENT, comment);
  }
}
export default RecipeService;
