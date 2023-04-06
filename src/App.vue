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
import local from './utils/local.js';
export default {
  name: 'App',
  data(){
    return{       
      theme: "",
    }
  },
  async created(){
    let color = local.get('theme')
    if(color){
      this.theme = local.get('theme')
    }else{
      this.theme = 'light'
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
