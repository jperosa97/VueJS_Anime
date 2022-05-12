<template>
 <section>
    <HeaderRandomAnime></HeaderRandomAnime>
    <NeueAnimeCarousel></NeueAnimeCarousel>
    <TopAnimeCarousel></TopAnimeCarousel>
    <PopulaerAnimeCarousel></PopulaerAnimeCarousel>
 </section>   
</template>   
<script>
import HeaderRandomAnime from '../components/HeaderRandomAnime.vue';
import NeueAnimeCarousel from '../components/NeueAnimeCarousel.vue';
import TopAnimeCarousel from '../components/TopAnimeCarousel.vue';
import PopulaerAnimeCarousel from '../components/PopulaerAnimeCarousel.vue';

export default {
   name: 'HomeItem',
   components:{  
     HeaderRandomAnime,
     NeueAnimeCarousel,
     TopAnimeCarousel,
     PopulaerAnimeCarousel,  
   },
}

</script>
<style>

</style>