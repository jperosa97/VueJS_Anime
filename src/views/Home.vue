<template>
<header>
  <HeaderRandomAnime></HeaderRandomAnime>
</header>
<section>
    <NeueAnimeCarousel></NeueAnimeCarousel>
    <PopulaerAnimeCarousel></PopulaerAnimeCarousel>
    <TopAnime></TopAnime>
</section>   
</template>   
<script>
import HeaderRandomAnime from '../components/HeaderRandomAnime.vue';
import NeueAnimeCarousel from '../components/NeueAnimeCarousel.vue';
import TopAnime from '../components/TopAnime.vue';
import PopulaerAnimeCarousel from '../components/PopulaerAnimeCarousel.vue';

export default {
   name: 'HomeItem',
   components:{  
    HeaderRandomAnime,
     NeueAnimeCarousel,
     TopAnime,
     PopulaerAnimeCarousel,  
   },
}

</script>
<style>

</style>