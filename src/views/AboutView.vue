<template>
  <div class="view-margin" >
    
    <AboutComponent />
    <FooterComponent />
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AboutComponent from '../components/AboutComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'AboutView',
  components: {
    AboutComponent,
    FooterComponent // Enregistrez le composant ici
  }
}
</script>

<style>
@import "../assets/CSS/view.css";
</style>

