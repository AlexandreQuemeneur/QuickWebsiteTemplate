

<template>
  <div :class="this.theme === 'light' ? 'light-theme' : 'dark-theme'" id="theme-color">
    <HeaderComponent />  
    <div class="main-content">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>



<script>
import HeaderComponent from './components/base/HeaderComponent.vue';
import FooterComponent from './components/base/FooterComponent.vue';
export default {
  name: 'App',
  data(){
    return{       
      theme: "",
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>


<style lang="scss">

</style>
