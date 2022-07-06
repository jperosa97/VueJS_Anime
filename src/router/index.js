import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AnimeDetail from '../views/AnimeDetail.vue'
import AnimeSuche from '../views/AnimeSuche.vue'
import AnimeNew from '../views/AnimeNew.vue'
import AnimePopular from '../views/AnimePopular.vue'

const routes = [
  {
    path: '/',
    name: 'HomeItem',
    component: Home
  },
{
    path: '/animeSuche',
    name: 'animeSuche',
   component: AnimeSuche
  },
  {
    path: '/animeDetail/:id/:title/',
    name: 'AnimeDetail',
    component: AnimeDetail,
  },
   {
    path: '/animeNew',
    name: 'AnimeNew',
    component: AnimeNew,
  },
  {
    path: '/animePopular',
    name: 'AnimePopular',
    component: AnimePopular,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
