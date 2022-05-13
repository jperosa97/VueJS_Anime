<template>
<div v-if="anime"> 
       <div class="animeDetail">
      <v-img 
        height="200"
        :src="anime.images.jpg.large_image_url"
        cover
      ></v-img>
     <div class="animeTitle">
     <div class="score">
          <h3>{{anime.title}}  ~  
          {{anime.title_japanese}}
          </h3>
        <span>{{anime.score}} <i id="icon" class="pi pi-star"></i></span>
        </div>
        <div class="animeInfo">
        <p v-if="anime.synopsis">{{anime.synopsis}}</p>
        </div>
      </div>
      <div class="animeImg">
        <v-img
        height="200"
        :src="anime.images.jpg.image_url"
        cover
      ></v-img>
         <div class="container">
            <ul class="animeMehrInfo">
              <li>{{anime.aired.string}}</li>
              <li>Episode: {{anime.episodes}}</li>
              <li>Source: {{anime.source}}</li>
              <li>Type: {{anime.type}}</li>
              <li>{{anime.genres}}</li>
            </ul>
          </div>
      </div>
         </div>
   </div>
</template>   
<script>
import axios from "axios";
export default {
  name: 'AnimeDetail',
  props: ['id', 'recommendation'],
   components: {
  },
  data(){
    return {
      anime : null,
     // characters: [],
     // recommendedAnime: [],
    }
  },created(){
    this.getAnimeById(this.$route.params.id);
    //this.getCharacters(this.$route.params.id);
    //this.getRecommendations(this.$route.params.id);
  },
  methods:{
    getAnimeById(id){
      axios.get(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.data)
      .then(res => {
         console.log(res.data)
        this.anime = res;
        //this.anime.genres = this.anime.genres.map(genre => genre.name).join(", ");
        //this.anime.producers = this.anime.producers.map(producer => producer.name).join(", ");
      });
    },
    /*getCharacters(id) {
      axios.get(`https://api.jikan.moe/v4/anime/${id}/characters_staff`)
        .then(res => {
          this.characters = res.data.characters;
        })
    },
    getRecommendations(id) {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
       .then(res =>  {
          this.recommendedAnime = res.data.recommendations.slice(0, 12);
       })
      
    },*/
  },  
   /*routeName() {
      if (this.type == "AnimeDetails") {
        return "AnimeDetails";
      }
      return "details-movie-id";
    },*/
}
</script>
<style>
.animeDetail {
  color: #F1EFEC;
  height: 85vh;
}
.animeDetail .backgroundImg {
  width: 100%;
  height: 350px;
  position: absolute;
  left: 0;
  z-index: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: .1;
  background-position: 50%;
  background-color: #eee;
  background-size: cover;
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
.animeImg img {
  width:  215px;
  border-radius: 7px;
}
.characterImg {
  width: 150px;
  border-radius: 5px;
  position: relative;
  top: 25px;
}
.aehnlicheAnime img {
  width: 195px;
  border-radius: 5px;
  position: relative;
  top: 20px;
}

.aehnlicheAnime:hover{
  transform: scale(0.9);
  transition-duration: 0.3s;
  color: #a52c1f;
  background-color: #2F3542;
}
.characterAnime{
  display: grid;
  margin-top: 50px;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 0.3fr));
  grid-auto-rows: auto;
  grid-gap: 2.5rem;
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
.trailer{
  display: flex;
  justify-content: center;
}
.trailer iframe{
  width: 50vw;
  height: 50vh;
  border: none;
}
.keinTrailer{
  color: #a52c1f;
  font-size: 20px;
  font-weight: bold;
}
::v-deep(.p-tabview .p-tabview-panels),
::v-deep(.p-tabview .p-tabview-nav),
::v-deep(.p-tabview .p-tabview-nav li .p-tabview-nav-link) {
  background-color:#2d2f33;
}
::v-deep(.p-component, .p-component) {
  background-color: #2d2f33;
  border-radius: 5px;
  color: #F1EFEC;
}
::v-deep(.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link) {
  background: #a52c1f;
  border-color: #2F3542;
  color: #F1EFEC;
}
::v-deep(.p-tabview-title) {
  color: #F1EFEC;
}
::v-deep(.p-tabview-nav-container) {
  display: flex;
  justify-content: center;
}
::v-deep(.p-card .p-card-title) {
  font-size: 18px;
  position: relative;
  top: 25px;
}
::v-deep(.p-fieldset) {
  border: 1px solid #2F3542;
  position: absolute;
  top: 30em;
}
</style>