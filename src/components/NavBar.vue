<template>

   <!--<div class="navLogo">
  <div id="nav">
    <router-link to="/searchAnime">Suchen  <i class="pi pi-search"></i></router-link> 
    <router-link to="/">Home <i class="pi pi-home"></i></router-link> 
    <router-link to="/animeZufall">Zufall <i class="pi pi-reply"></i></router-link>
  </div>
</div>-->
  <router-view/>

</template>
<script>
  export default {
  }
</script>
<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira Sans', sans-serif;
}
body {
  background-color: #2F3542;
  text-align: center;
}

#nav {
    width: 30vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  a {
    font-weight: bold;
    color: #F1EFEC;
    text-decoration: none;
   display: flex;
      flex-direction: column-reverse;
    &.router-link-exact-active {
      color: #2F3542;
     
    }
  }
  i {
    font-size: 20px; 
  }
}
.navLogo {
  display: flex;
  background-color: #892B2D;
  height: 60px;
  left: 35%;
  justify-content: center;
  position: fixed;
  z-index: 1;
  bottom: 0;
  border-radius: 5px;
}


.logo {
    display: flex;
    align-items: center;
    width: 15vw;
    height: 8vh;
    justify-content: center;
}
.logo .logoAnime {
  width: 8rem;
}
</style>
