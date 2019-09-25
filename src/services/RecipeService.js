import axios from 'axios';

const RECIPES = 'api/recipe';

class RecipeService {
  /**
   * Gets necessary information for application receipt
   */
  static getRecipes(){
    return axios.get(RECIPES)
  }

}

export default RecipeService;