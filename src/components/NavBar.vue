<template>
  <div class="navLogo">
    <div id="nav">
      <router-link to="/animeSuche"><v-icon class="icon" large color="darken-2">mdi-magnify</v-icon> Suchen</router-link> 
      <router-link to="/"><v-icon class="icon" large color="darken-2">mdi-home</v-icon> Home</router-link> 
      <router-link to="/animeZufall"><v-icon class="icon" large color="darken-2">mdi-help-circle</v-icon> Zufall</router-link>
    </div>
  </div>
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
    align-items: center;
    flex-direction: column-reverse;
    &.router-link-exact-active {
      color: #2F3542;
     
    }
  }

}

</style>
