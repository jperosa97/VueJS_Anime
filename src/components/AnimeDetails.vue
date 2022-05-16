<template>
       <div class="animeDetail" v-if="anime.data">
     <div class="animeTitle">
     <div class="score">
          <h3>{{anime.data.title}}  ~  
          {{anime.data.title_japanese}}
          </h3>
        <span>{{anime.data.score}}<v-icon
                  large
                  color="orange darken-2">
                  mdi-star
              </v-icon> </span>
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
         <div class="InfoContainer">
            <ul class="animeMehrInfo">
              <li>{{anime.data.aired.string}}</li>
              <li>Episode: {{anime.data.episodes}}</li>
              <li>Source: {{anime.data.source}}</li>
              <li>Type: {{anime.data.type}}</li>
              <li>Season: {{anime.data.season}}</li>
              <div class="genresConainer">

              <span v-for="genre in anime.data.genres"
                  :key="genre.mal_id">
                <v-chip
                class="ma-2"
                color="#F5C050"
                label
                
              >
                {{genre.name}} 
              </v-chip></span>
              </div>
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
          anime.value = data;
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
  color: #ecf0f1;
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

.animeInfo {
  width: 50vw;
  text-align: left;
}

.InfoContainer {
    display: flex;
    justify-content: center;
    width: 18vw;
    position: relative;
    top: -8em;
    background-color: #3D4562;
    height: auto;
    border: #3D4562 1px solid;
    left: 10em;
    border-radius: 5px;
}
.animeImg {
  display: flex;
  width: 40vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 94vh;
}

#animeMehrInfo{
  display: flex;
  justify-content: center;

}
.animeMehrInfo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #ecf0f1;
    list-style: none;
    height: auto;
    justify-content: center;
}
</style>