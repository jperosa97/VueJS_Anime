<template>
   <div  class="featured" v-if="anime" >
   <v-img  
      max-height="600"
      cover 
      class="headerImg"
      :src="anime.images.webp.large_image_url" alt="">
    </v-img>
        <div class="featured--content">
          <div class="featured--content--title">
            {{anime.title}}
          </div>
          <span class="featured--content--synopsis">
           {{ anime.synopsis}}</span>
          <div class="featured--content--action">
            <router-link :to="{ name: 'AnimeDetail', params: { id: anime.mal_id, title: anime.title}}" class="featured--content--action--button">
              <span>Details</span>
              <v-icon
                  large
                  color="white darken-2">
                mdi-filmstrip
              </v-icon>   
            </router-link>
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
          //console.log(res.data.data)
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
.headerRandomAnime {
  height: 85vh;
}
.featured {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-around;
}
.headerImg {
    max-width: 26%;

}
.featured--content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30vw;
}
.featured--content--title {
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
  flex-direction: row;
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
  width: 160px;
  height: 60px;
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