<template>
<div class="conNewAnime">
  <h1 class="newAnimeTitle">New Anime</h1>
</div>
<div class="newAnime">

  <div class="cards" v-if="animes">
     <AnimeCard v-for="anime in animes" :key="anime.mal_id" :anime="anime"/>
  </div>
</div>
</template>

<script>
import AnimeCard from '../components/AnimeCard.vue'
import axios from 'axios' 
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NeueAnimeCarousel',
  components: {
    AnimeCard,
  },
  data(){
    return{
      animes: null,
    }
  },
  methods: {
    getAiringAnime(){
      axios.get(`https://api.jikan.moe/v4/top/anime?filter=upcoming&page=2`)
      .then(res => {
        console.log(res.data.data)
        this.animes = res.data.data
      })
    },
  },
  created(){
    this.getAiringAnime()
  }
});
</script>

<style>
.newAnimeTitle {
    display: flex;
    justify-content: center;
    height: 10vh;
    align-items: center;
    color: #ecf0f1;
}
.newAnime {
    position: relative;
    left: 7%;
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