import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AnimeDetail from '../views/AnimeDetail.vue'
import AnimeSuche from '../views/AnimeSuche.vue'
//import AnimeZufall from '../views/AnimeZufall.vue'

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
    path: '/animeDetail/:id',
    name: 'AnimeDetail',
    component: AnimeDetail,
  },
   /* {
    path: '/animeZufall',
    name: 'AnimeZufall',
    component: AnimeZufall,
  },*/
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
