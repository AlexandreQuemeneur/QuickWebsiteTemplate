<template>
    <header>
        <button @click.prevent="changeTheme()" >Changer de thème</button>
        <NavComponent />
    </header>
</template>

<script>
import NavComponent from './NavComponent.vue';
import local from '../../utils/local.js';
    export default {
        name: 'HeaderComponent',
        components: {
            NavComponent,
        },
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
  methods:{
        changeTheme(){
            this.theme = this.theme === "dark" ? "light" : "dark";
            local.set('theme', this.theme);
            let themeColor = document.getElementById("theme-color");
            themeColor.classList.toggle("dark-theme");
            themeColor.classList.toggle("light-theme");

        },
    }
}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>