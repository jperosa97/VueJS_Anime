<template>
<header class="animeDetails">
  <AnimeDetails></AnimeDetails>
</header>
<section class="animeCharTab">
  <AnimeCharTab></AnimeCharTab>
</section>
  
   
</template>
<script>
import AnimeDetails from '../components/AnimeDetails.vue'
import AnimeCharTab from '../components/AnimeCharTab.vue'
export default {
  name: 'AnimeDetailItem',
  components: {
    AnimeDetails,
    AnimeCharTab
  }
}
</script>
<style>
.animeDetails {
  height: 150vh;
}

</style>
