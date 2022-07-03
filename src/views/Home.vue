<template>
<section>
    <NeueAnimeCarousel></NeueAnimeCarousel>
    <PopulaerAnimeCarousel></PopulaerAnimeCarousel>
    <TopAnime></TopAnime>
</section>   
</template>   
<script>
import NeueAnimeCarousel from '../components/NeueAnimeCarousel.vue';
import TopAnime from '../components/TopAnime.vue';
import PopulaerAnimeCarousel from '../components/PopulaerAnimeCarousel.vue';

export default {
   name: 'HomeItem',
   components:{  
     NeueAnimeCarousel,
     TopAnime,
     PopulaerAnimeCarousel,  
   },
}

</script>
<style>

</style>