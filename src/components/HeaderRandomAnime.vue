<template>
  <div class="section" v-if="anime" >
   <div  class="featured">
   <v-img  
      max-height="600"
      cover 
      :src="anime.images.jpg.large_image_url" alt="">
    </v-img>
    <div class="featured--vertical">
      <div class="featured--horizontal">
        <div class="featured--content">
          <div class="featured--content--title">
            {{anime.title}}
          </div>
          <span class="featured--content--synopsis">
           {{ anime.synopsis}}</span>
          <div class="featured--content--action">
            <router-link :to="'/AnimeDetail/40456'" class="featured--content--action--button">
              <v-icon
                  large
                  color="white darken-2">
                mdi-filmstrip
              </v-icon>
              <span>Details</span>
            </router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import axios from 'axios'

export default {
   name: 'HeaderRandomAnime',
   
   data(){
     return{
      anime: null,
     }
   },
   methods: {
    getRandomAnime(){
        axios.get(`https://api.jikan.moe/v4/random/anime`)
        .then(res => {
          console.log(res.data.data)
            this.anime = res.data.data
        })
    }
   },  
   created(){
     this.getRandomAnime()
   }
}

</script>
<style>
.featured {
  height: calc(70vh);
  width: 100vw;
  margin-left: -25em;
  margin-top: -1em;
  background-size: cover;
  background-position: center;
}
.featured--vertical {
  width: inherit;
  height: inherit;
  position: relative;
  top: -37.49em;
  background: linear-gradient(to top, #111 10%, transparent 90%);
}

.featured--horizontal {
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
}
.featured--content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3vw;
  max-width: 30vw;
}
.featured--content--title {
  margin-top: -70px;
  font-size: 32px;
  color: #ececec;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
}

.featured--content--synopsis {
  overflow: hidden;
  display: -webkit-box;
  font-size: 16px;
  margin-bottom: 24px;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #F1EFEC;
  text-align: left;
}

.featured--content--action {
  display: flex;
  justify-content: center;
}

.featured--content--action--button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fd9330;
  outline: none;
  border: none;
  padding: 12px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 8px;
  width: 125px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  text-decoration: none;
}

.featured--content--action--button span:first-child {
  margin-right: 8px;
}

.featured--content--action--button:hover {
  transform: translateY(-3px);
}

</style>