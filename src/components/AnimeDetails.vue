<template>
<div> 
       <div class="animeDetail">
      <v-img 
        width="100"
        class="backgroundImg"
            :src="anime.data.images.jpg.large_image_url"
        cover
      ></v-img>
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
        height="150"
         :src="anime.data.images.jpg.image_url"
        cover
      ></v-img>
         <div class="container">
            <ul class="animeMehrInfo">
              <li>{{anime.data.aired.string}}</li>
              <li>Episode: {{anime.data.episodes}}</li>
              <li>Source: {{anime.data.source}}</li>
              <li>Type: {{anime.data.type}}</li>
              <li v-for="genre in anime.data.genres"
                  :key="genre.mal_id">
                 {{genre.name}}</li>
            </ul>
          </div>
      </div>
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

</style>