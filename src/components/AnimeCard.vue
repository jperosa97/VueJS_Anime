<template><div class="card">
<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
  
  <router-link :to="{ name: 'AnimeDetail', params: { id: anime.mal_id, title: anime.title}}">
		<a class="cardAnime" target="_blank">
    <v-progress-linear
      v-if="loading"
      class="position-absolute"
      style="z-index: 1"
      color="deep-purple"
      height="10"
      indeterminate
    ></v-progress-linear>

    <v-img class="imgAnime"
      height="250"
     :src="anime.images.jpg.image_url" 
				:alt="anime.title + ' Poster'"
      cover
    ></v-img>
    <v-card-item>
      <v-card-title>{{ anime.title }}</v-card-title>
      <v-card-subtitle>
        <span class="mr-1">{{anime.type}}</span>
		<span class="mr-1">{{anime.year}}</span>
        <span class="mr-1">{{anime.season}}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="text-grey ms-4">
         {{anime.score}}
        </div>
      </v-row>
    </v-card-text>
    <ul class="genreContainer">
		<li v-for="genre in anime.genres"
        :key="genre.mal_id">
			<v-chip
                class="ma-2"
                color="#F5C050"
                label  
              >{{genre.name}}</v-chip>
		</li>
	</ul>
	</a>
	</router-link>
	
 </v-card></div>
</template>

<script>
export default {
	props: ['anime'],
    
}
</script>

<style>
.card {
	width: 16%;
    float: left;
    margin-left: 50px;
}
.imgAnime {
    width: 204px;
    height: 300px;
    border-radius: 6px 6px 0 0;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 15%);
    transition: 0.4s;
    margin-left: 2px;
}
h3 {
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    width: 200px;
    padding: 16px;
    color: #F1F2F6;
    transition: 0.4s;
}
.genreContainer li {
    list-style: none;
    float: left;
}
</style>