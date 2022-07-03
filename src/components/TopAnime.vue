<template>
  <div class="sectionTop" v-if="animes">
  <div class="container">
      <h1 class="titel">Top Anime 25</h1>
    <div class="flexed-line"></div>
  </div>
      <template v-for="anime in animes" :key="anime.mal_id">
        <v-list-item>
         <router-link :to="{ name: 'AnimeDetail',  params: { id: anime.mal_id, title: anime.title}}" style="text-decoration: none;">
         <div class="topList">         
          <h2 class="rank">
              # {{anime.rank }} 
          </h2>
            <v-img class="cover" :src="anime.images.jpg.image_url"></v-img>
          <v-list-item-content class="itemContent">
            <v-list-item-title class="animeScore"> {{anime.title}}
            <div class="containerAnime">
            
             <v-icon
                  large
                  color="orange darken-2">
                  mdi-star
                </v-icon> {{anime.score}}</div>
              </v-list-item-title>
              <div class="topGenre">
                  <v-list-item-subtitle   v-for="genre in anime.genres"
                  :key="genre.mal_id">  
                  <v-chip
                    class="ma-2"
                    color="#F5C050"
                    label>
                    {{genre.name}} 
                  </v-chip> 
                </v-list-item-subtitle>
              </div>
          </v-list-item-content>
           </div>
           </router-link>
        </v-list-item>
      </template>
   
  </div>
</template>

<script>
import axios from 'axios' 
export default({
  name: 'TopAnimeCarousel',
  components: {

  },
  data() {
    return {
       animes: null,
    }
  },
  methods: {
      getUpcomingAnime(){
      axios.get(`https://api.jikan.moe/v4/top/anime`)
      .then(res => {
        //console.log(res.data.data)
        this.animes = res.data.data
      })
    },
  },
  created(){  
    this.getUpcomingAnime()     
  },
  
  
});
</script>

<style>
.sectionTop{
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

.topList {
    border: 1px solid #1d1c1c;
    display: flex;
    background-color: #1d1c1c;
    border-radius: 5px;
    width: 70vw;
}
.topList .cover {
    height: 70px;
    width: 50px;
}
.topList .rank {
  color: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6%;
}
.animeScore {
    color: #ecf0f1;
    display: flex;
    justify-content: space-between;
    width: 95%;
}
.itemContent {
      display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 85%;
}
.topGenre {
  display: flex;
  flex-direction: row;
}

</style>