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
        :value="'tab-1'" >
        <v-card v-if="character.data">
        <!-- <v-img
        width="300"
         height="100"
        :src="anime.data.character.images.jpg.image_url"
        ></v-img>-->
          <v-card-text><h1>{{character.data.name}}</h1></v-card-text>
        </v-card>
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
import {ref, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router'
  export default {
            data(){
      return{
      tab: null,
      }
    },
    setup () {
      const character = ref ([])
      const route = useRoute()
      
      onBeforeMount(() => {
        fetch(`https://api.jikan.moe/v4/anime/${route.params.id}/characters`)
        .then((res) => res.json())
        .then((data) => {
            character.value = data;
            console.log(data)
        })
      })
      return {
        character,
        //tab: null 
      }
    }
  }
</script>