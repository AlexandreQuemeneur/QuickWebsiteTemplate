

<template>
  <div :class="this.theme === 'light' ? 'light-theme' : 'dark-theme'">
    <div class="theme">
      <button @click.prevent="changeTheme()" >Changer de thème</button>
    </div>
    <HeaderComponent />
    <div class="main-content">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>



<script>
import local from './utils/local.js';
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
  async created(){
    let color = local.get('theme')
    if(color){
      this.theme = local.get('theme')
    }else{
      this.theme = 'light'
    }
  },
  methods:{
        changeTheme(){
            this.theme = this.theme === "dark" ? "light" : "dark";
            local.set('theme', this.theme); 
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
