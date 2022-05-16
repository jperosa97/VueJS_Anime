<template>
       <div class="animeDetail" v-if="anime.data">
     <div class="animeTitle">
     <div class="score">
          <h3>{{anime.data.title}}  ~  
          {{anime.data.title_japanese}}
          </h3>
        <span>{{anime.data.score}} <i id="icon" class="pi pi-star"></i></span>
        </div>
        <div class="animeInfo">
        <p>{{anime.data.synopsis}}</p>
        </div>
      </div>
      <div class="animeImg">
      <v-img
        width="300"
         height="100"
        :src="anime.data.images.jpg.image_url"
        ></v-img>
      
      </div>
       
         <div class="container">
            <ul class="animeMehrInfo">
              <li>{{anime.data.aired.string}}</li>
              <li>Episode: {{anime.data.episodes}}</li>
              <li>Source: {{anime.data.source}}</li>
              <li>Type: {{anime.data.type}}</li>
              <li v-for="genre in anime.data.genres"
                  :key="genre.mal_id">
                <v-chip
                class="ma-2"
                color="cyan"
                text-color="white"
              
              >
                {{genre.name}} 
              </v-chip></li>
            </ul>
          </div>
      </div>
         

</template>   
<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup(){
    const anime = ref([]);
    const route = useRoute();
    
    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v4/anime/${route.params.id}`)
      .then((res) => res.json() )
        .then((data) => {
          anime.value =data;
          console.log(data);
        })
      })
      return {
        anime,
      }
  }
  }

</script>
<style>
.animeDetail {
  color: #F1EFEC;
  height: 85vh;
}

.animeTitle {
  position: absolute;
  left: 35vw;
  top: 7em;
}
.animeTitle h3 {
  display: flex;
  height: 6vh;
  justify-content: space-around;
  align-items: center;
  margin-top: 3em;
}
.animeTitle .score {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.animeTitle #icon {
  font-size: 20px;
  color: #a52c1f;
}
.animeInfo {
  width: 50vw;
  text-align: left;
}
.p-fieldset .animeMehrInfo {
  line-height: 1.5;
  margin: 0;
  position: relative;
  left: 3em;
  width: 30vw;
}
.container {
  height: 20vh;
  display: flex;
  position: relative;
  align-items: center;
}
.animeImg {
  display: flex;
  width: 40vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#animeMehrInfo{
  display: flex;
  justify-content: center;
}
.animeMehrInfo{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #F1EFEC;
  list-style: none;
  width: 205px;
}
</style>