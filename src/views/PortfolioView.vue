<template >
    <div class="view-margin">
        <PortfolioCompenent />
        <FooterComponent />
    </div>
</template>
<script>
import PortfolioCompenent from '../components/PortfolioComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'PortfolioView',
  components: {
    PortfolioCompenent,
    FooterComponent // Enregistrez le composant ici
  }
}
</script>
<style>
@import "../assets/CSS/view.css";   
</style>