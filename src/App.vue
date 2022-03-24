<template>
<div>
  <TheNavigation/>
  <router-view> </router-view>
         
</div>
</template>

<script>

import TheNavigation from './components/Navigation.vue'
//import SliderShow from './components/SliderShow.vue'
export default {
  name: 'App',
  components: {
    TheNavigation,
  
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
