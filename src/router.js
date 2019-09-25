import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recipes from './views/Recipes.vue'
import Calendar from './views/Calendar.vue'

Vue.use(Router)

export default new Router({
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
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})