<template>
  <header>
            <h1>The&nbsp;<strong>{{listName}}</strong>&nbsp;List</h1>
            <form class="search-box" @submit.prevent="HandleSearch">
                <input 
                    type="search" 
                    class="search-field" 
                    :placeholder="'Search for an '+listName+'...'"
                    required
                    v-model="search_query" />
                <button type="button" class="search-button" @click="listName = listName === 'manga' ? 'anime' : 'manga'">
                    Search {{listName === 'manga' ? 'Anime' : 'Manga'}}
                </button>
            </form>
            
        </header>
  <main>
            <div class="cards" v-if="mangalist.length > 0">
                <CardTemplate 
                    v-for="manga in mangalist" 
                    :key="manga.mal_id"
                    :manga="manga" />
            </div>
            <div class="no-results" v-else>
                <h3>Sorry, we have no results found please search something else</h3>
            </div>
        </main>
</template>

<script>
import CardTemplate from './components/CardTemplate.vue'
const jikan_api = 'https://api.jikan.moe/v4/';
export default {
  components: {
    CardTemplate
  },
  data() {
    return {
      mangalist: [],
      search_query: '',
      listName: 'manga'
    }
  },
  methods: {
    HandleSearch() {
      this.GetmangaList()
    },
    GetmangaList() {
      fetch(`${jikan_api+this.listName}?q=${this.search_query}`)
        .then(async response => {
          this.mangalist = (await response.json()).data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.GetmangaList()
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
}

</style>