<template>
  <div class="section" v-if="animes">
  <div class="container">
      <h1 class="titel">Populär Anime</h1>
    <div class="flexed-line"></div>
           <v-row
    align="center"
    justify="space-around"
  >
  <router-link :to="{ name: 'AnimePopular', }">
    <v-btn
      depressed
      color="error"
    >
      Show More
    </v-btn>
    </router-link>
  </v-row>
  </div>
   
  <Carousel :itemsToShow="7" :wrapAround="true">
    <Slide v-for="anime in animes" :key="anime.mal_id">
      <div class="carousel__item">
      <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto my-12"
        width="150"
         v-bind="props"
      >
      <v-img
        height="200"
        :src="anime.images.jpg.image_url"
        cover
      ></v-img>
      <v-card-header>
        <v-card-header-text>
          <v-card-title class="col-2 text-truncate" style="font-size: 13px;">{{anime.title }}</v-card-title>
          <v-card-subtitle>
             <span class="mr-1">
              <v-icon
                  large
                  color="orange darken-2">
                  mdi-star
              </v-icon> 
              {{anime.score}}   {{anime.type}}   
            </span>
          </v-card-subtitle>
          <v-card-subtitle class="col-3 text-truncate">
             <span class="mr-1" v-for="genre in anime.genres"
                  :key="genre.mal_id">
                 {{genre.name}}
            </span>             
          </v-card-subtitle>
        </v-card-header-text>
      </v-card-header>
      <v-overlay
        :model-value="isHovering"
        contained
        scrim="#2F3542"
        class="align-center justify-center"
      >
         <router-link :to="{ name: 'AnimeDetail',  params: { id: anime.mal_id, title: anime.title}}" style="text-decoration: none;">
        <v-btn flat style="background-color: #27ae60; color:#ecf0f1; ">more Info </v-btn>
      </router-link>
      </v-overlay>
    </v-card></v-hover>
   </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
  </div>
</template>

<script>
import axios from 'axios' 
import { defineComponent } from 'vue';
import { Carousel,  Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'PopulaerAnimeCarousel',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data(){
    return {
      animes:null,
    }
  },
  methods: {
    getBypopularityAnime(){
      axios.get(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
      .then(res => {
        //console.log(res.data.data)
        this.animes = res.data.data
      })
    },
  },
  created(){
    this.getBypopularityAnime()
  }
});
</script>

<style>
.section{
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    max-width: 80%;
}
.container {
  display: flex;
    align-items: center;
}
.container .titel {
  color: #ecf0f1;
}
.container .flexed-line {
      flex: 1;
    border-bottom: 1px solid #9e9e9e;
    margin-left: 12px;
    border-radius: 8px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid #121212;
}

</style>