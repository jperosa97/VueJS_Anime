<template>
 <section>
<div  class="featured">
 <v-img  max-height="600"
              cover src="../assets/demon_slayer.jpg" alt=""></v-img>
 
        <div class="featured--vertical">
          <div class="featured--horizontal">
            <div class="featured--content">
              <div class="featured--content--title">
                Kimetsu no Yaiba
              </div>
              <span class="featured--content--synopsis">
                Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.
              </span>
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
    <TopAnimeCarousel></TopAnimeCarousel>
    <NeueAnimeCarousel></NeueAnimeCarousel>
    <PopulaerAnimeCarousel></PopulaerAnimeCarousel>
 </section>   
</template>   
<script>
import NeueAnimeCarousel from '../components/NeueAnimeCarousel.vue';
import TopAnimeCarousel from '../components/TopAnimeCarousel.vue';
import PopulaerAnimeCarousel from '../components/PopulaerAnimeCarousel.vue';

export default {
   name: 'HomeItem',
   components:{  
     NeueAnimeCarousel,
     TopAnimeCarousel,
     PopulaerAnimeCarousel,  
   },
}

</script>
<style>
/*.container {
      display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 21vh;
}*/
.featured {
  height: calc(70vh);
  background-size: cover;
  background-position: center;
}
.featured--vertical {
  width: inherit;
  height: inherit;
  position: relative;
    top: -37.5em;
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