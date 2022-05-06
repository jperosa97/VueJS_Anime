import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import AnimeDetail from '../views/AnimeDetail.vue'
//import SearchAnime from '../views/SearchAnime.vue'
//import AnimeZufall from '../views/AnimeZufall.vue'

const routes = [
  {
    path: '/',
    name: 'HomeItem',
    component: Home
  },
 /* {
    path: '/searchAnime',
    name: 'SearchAnime',
   component: SearchAnime
  },
  {
    path: '/animeDetail/:id',
    name: 'AnimeDetail',
    component: AnimeDetail,
  },
  {
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
