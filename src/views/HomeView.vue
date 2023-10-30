<template>
  <div class="view-margin">
    <WelcomeComponent />
  <AboutComponenent />
  <PortfolioCompenent />
  <ProjectComponent />
  <GalleryComponent />
  <ContactComponent />
  <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import WelcomeComponent from '../components/WelcomeComponent.vue'
import AboutComponenent from '../components/AboutComponent.vue'
import PortfolioCompenent from '../components/PortfolioComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'HomeView',
  components: {
    WelcomeComponent, // Enregistrez le composant ici
    AboutComponenent,
    PortfolioCompenent,
    ProjectComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  }
}
</script>

<style>
@import "../assets/CSS/view.css";
</style>

