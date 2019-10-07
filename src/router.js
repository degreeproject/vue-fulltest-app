import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recipes from './views/Recipes.vue'
import Recipe from './views/Recipe.vue'
import CreateRecipe from './views/CreateRecipe.vue'
import Calendar from './views/Calendar.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
// import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/recipe/create-recipe',
      name: 'create-recipe',
      component: CreateRecipe
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// router.beforeEach( async(to, from, next) => {
//   let loggedIn = store.state.userModule.user.token !== null;
//   if (to.fullPath === '/login' || to.fullPath === '/register') {
//     next();
//   } else {
//     if (!loggedIn) {
//       router.push('/login');
//     }
//   }
//   next();
// });

export default router;