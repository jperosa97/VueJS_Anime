<template>
  <v-card v-if="anime.data">
    <v-tabs v-model="tab" background-color="#1e1e1e;" align-tabs="center" stacked>
      <v-tab value="tab-1">
        <v-icon>mdi-account</v-icon>
        Characters
      </v-tab>

      <v-tab value="tab-2">
        <v-icon>mdi-fire</v-icon>
        Trailer
      </v-tab>

      <v-tab value="tab-3">
        <v-icon>mdi-hand-heart</v-icon>
        Recommendation
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <!--Character start-->
      <v-window-item
        :value="'tab-1'"
        v-for="character in characters"
        :key="character.mal_id"
      >
        <v-container fluid>
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-img :src="character.character.images.jpg.image_url"></v-img>
              <v-overlay
                :model-value="isHovering"
                contained
                scrim="#2F3542"
                class="align-center justify-center"
              >
                <v-card-text style="color: #ecf0f1"
                  ><h1>{{ character.character.name }}</h1></v-card-text
                >
              </v-overlay>
            </v-card>
          </v-hover>
        </v-container>
      </v-window-item>
      <!--Character end-->
      <!--Trailer Start-->
      <v-window-item :value="'tab-2'">
        <div class="trailer">
          <iframe
            height="250"
            width="500"
            v-if="anime.data.trailer.embed_url != null"
            :src="anime.data.trailer.embed_url"
          ></iframe>
          <div class="keinTrailer" v-else>keinen Trailer vorhanden.</div>
        </div>
      </v-window-item>
      <!--Trailer end-->
      <!--Recommendation start-->
      <v-window-item :value="'tab-3'">
        <v-container v-if="recommendedAnime.length > 1">
          <div
            class="recommendationAnime" v-for="recommendation in recommendedAnime" :key="recommendation.mal_id">
            <v-container fluid>
              <v-hover v-slot="{ isHovering, props }">
                  <v-card max-height="200" v-bind="props">
                    <v-img
                      :src="recommendation.entry.images.jpg.image_url"
                    ></v-img>
                    <v-overlay
                      :model-value="isHovering"
                      contained
                      scrim="#2F3542"
                      class="align-center justify-center"
                    >
                      <v-card-text style="color: #ecf0f1">
                        <!-- <router-link :to="{ name: 'AnimeDetail', params: { id: recommendation.entry.mal_id, title:recommendation.entry.title  }}"> -->
                          <h1>{{ recommendation.entry.title }}</h1>
                        <!-- </router-link> -->
                      </v-card-text>
                    </v-overlay>
                  </v-card>
              </v-hover>
            </v-container>
          </div>
        </v-container>
        <h2 class="md:text-xl text-base mb-4" v-else>
          Keine Empfehlung vorhanden.
        </h2>
      </v-window-item>
    </v-window>
    <!--Recommendation end-->
  </v-card>
</template>
<script>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "AnimeCharTab",
  props: ["id", "recommendation"],
  data() {
    return {
      tab: null,
      characters: [],
      recommendedAnime: [],
    };
  },
  setup() {
    const anime = ref([]);
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://api.jikan.moe/v4/anime/${route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          anime.value = data;
        });
    });
    return {
      anime,
    };
  },

  methods: {
    getAnimeData(id) {
      axios
        .all([
          axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`),
          axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`),
        ])
        .then(
          axios.spread((charactersRes, recommendationsRes) => {
            this.characters = charactersRes.data.data;
            this.recommendedAnime = recommendationsRes.data.data.slice(0, 12);
            console.log(charactersRes.data.data)
          })
        )
        .catch((error) => {
          console.log(error);
        });
    },
    
  },
  created() {
    this.getAnimeData(this.$route.params.id);
  },
};
</script>

<style>
.v-window__container {
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 0.3fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
}
.v-container {
  display: grid;
  margin-top: 50px;
  width: 80vw;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 0.3fr));
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
}
.trailer {
  width: 100vw;
  display: flex;
  justify-content: center;
}
</style>
