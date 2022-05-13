<template>
   <div class="searchAnime">
      <header>
         <h1>Anime Suchen</h1>

         <form class="search-box" @submit.prevent="HandleSearch">
            <input type="search"
               class="search-field"
               placeholder="Anime suchen"
            v-model="search_query">
         </form>
      </header>
      <main>
         <div class="cards" v-if="animelist.length > 0">
            <AnimeCard v-for="anime in animelist"
                  :key="anime.mal_id"
                  :anime="anime" />
         </div>
         <div class="no-results" v-else>
            <h3>Sorry, kein Resultat vorhanden...</h3>
         </div>
      </main>
   
   </div>
</template>   
<script>
import { ref } from 'vue';
import AnimeCard from '../components/AnimeCard.vue';
export default {
   name: 'AnimeSuche',
   components:{  
      AnimeCard
   },
   setup(){
      const search_query = ref("");
      const animelist = ref([]);
      const HandleSearch = async () => {
         animelist.value = await fetch(`https://api.jikan.moe/v4/anime?q=${search_query.value}`)
         .then(res => res.json())
         .then(data => data.results);
         search_query.value = "";
      }
      return{
         AnimeCard, 
         search_query,
         animelist,
         HandleSearch
      }
   }
}

</script>
<style lang="scss">

.cardAnime {
  overflow: hidden;
  height: 360px;
  display: inline-block;
  text-decoration: none;
}
header {
	padding-top: 50px;
	padding-bottom: 50px;
	h1 {
		color: #F1EFEC;
		font-size: 42px;
		font-weight: 400;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 30px;
		strong {
			color: #a52c1f;
		}
		&:hover {
			color: #a52c1f;
		}
	}
	.search-box {
		display: flex;
		justify-content: center;
		padding-left: 30px;
		padding-right: 30px;
		.search-field {
			appearance: none;
			background: none;
			border: none;
			outline: none;
			background-color: #F3F3F3;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
			display: block;
			width: 100%;
			max-width: 600px;
			padding: 15px;
			border-radius: 8px;
			color: #313131;
			font-size: 20px;
			transition: 0.4s;
			&::placeholder {
				color: #AAA;
			}
			&:focus, &:valid {
				color: #FFF;
				background-color: #313131;
				box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
			}
		}
	}
}
main {
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 300px;
  color: #a52c1f;
}
</style>