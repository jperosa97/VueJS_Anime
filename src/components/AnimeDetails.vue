<template>
  <div class="animeDetail" v-if="anime.data">
    <v-banner class="pa-0" max-height="200">
      <v-img
        class="background-img"
        :src="anime.data.images.jpg.image_url"
      ></v-img>
    </v-banner>
    <div class="animeTitle">
      <h3>{{ anime.data.title }} ~</h3>
      <span>
        {{ anime.data.title_japanese }}
      </span>
      <div class="animeInfo">
        <p>{{ anime.data.synopsis }}</p>
      </div>
    </div>
    <div class="animeImg">
      <v-img
       
        style="border-radius: 10px;"
        :src="anime.data.images.jpg.image_url"
      ></v-img>
   
    <div class="InfoContainer">
      <ul class="animeMehrInfo">
        <li>
          <span
            >{{ anime.data.score }}
            <v-icon large color="orange darken-2"> mdi-star </v-icon>
          </span>
        </li>
        <li>{{ anime.data.aired.string }}</li>
        <li>Episode: {{ anime.data.episodes }}</li>
        <li>Source: {{ anime.data.source }}</li>
        <li>Type: {{ anime.data.type }}</li>
        <li>Season: {{ anime.data.season }}</li>
        <div class="genresConainer">
          <span v-for="genre in anime.data.genres" :key="genre.mal_id">
            <v-chip class="ma-2" color="#F5C050" label>
              {{ genre.name }}
            </v-chip></span
          >
        </div>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const anime = ref([]);
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v4/anime/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          anime.value = data;
          console.log(data);
        });
    });
    return {
      anime,
    };
  },
};
</script>
<style>
.animeDetail {
  color: #ecf0f1;
}
.animeTitle {
  position: absolute;
  left: 35vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.background-img {
  width: 100vw;
  filter: blur(9px);
  object-fit: cover;
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
.animeImg {
  width: 20vw;
  margin: -4em 0 0 10em;
  height: 94vh;
}

#animeMehrInfo {
  display: flex;
  justify-content: center;
}
.animeMehrInfo {
 
  color: #ecf0f1;
  list-style: none;
 
}
</style>
