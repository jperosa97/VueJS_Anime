<template>
  <v-card >
    <v-tabs 
      v-model="tab"
      background-color="deep-purple-accent-4"
      centered
      stacked
    >
      <v-tab value="tab-1">
        <v-icon>mdi-phone</v-icon>
        Characters
      </v-tab>

      <v-tab value="tab-2">
        <v-icon>mdi-heart</v-icon>
        Favorites
      </v-tab>

      <v-tab value="tab-3">
        <v-icon>mdi-account-box</v-icon>
        Nearby
      </v-tab>
    </v-tabs>
    <v-window   v-model="tab">
    <v-window-item 
        :value="'tab-1'" v-for="character in characters"
        :key="character.mal_id">
        <v-container fluid>
        
        <v-hover v-slot="{ isHovering, props }">
              <v-card
                width="200"
                height="200" v-bind="props">
                  <v-img
                  :src="character.image_url"
                  ></v-img> 
                  <v-overlay  :model-value="isHovering"
                  contained
                  scrim="#2F3542"
                  class="align-center justify-center">
                    <v-card-text><h1>{{ character.name }}</h1></v-card-text> 
                  </v-overlay>
              </v-card>
        </v-hover> </v-container>
      </v-window-item>  
      <v-window-item
        :value="'tab-2'"
      >
        <v-card>
       
          <v-card-text><h1>hello</h1></v-card-text> 
       
        </v-card>
      </v-window-item>
      <v-window-item
        :value="'tab-3'"
      >
        <v-card>
          <v-card-text><h1>helloooo</h1></v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script> 
import axios from 'axios'
export default {
    name: 'AnimeCharTab',
    props: ['id'],
    data(){
      return{
      tab: null,
      characters: [],
      }
    },
    created(){
      this.getCharacters(this.$route.params.id);
    },
    methods: {
      getCharacters(id){
        axios.get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)
        .then(res => {
          this.characters = res.data.characters;
          console.log(res.data.characters);
        })
      }
    }
  }
</script>

<style>

</style>