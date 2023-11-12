<template>
  <div id="app">
   
    <div :class="{'nav-custom': !isFixed, 'fixed-nav': isFixed, 'container-fluid':true}" >
      <!-- L'intérieur de la barre de navigation -->
      <div class="row">
        <!-- Colonne du logo (2 colonnes) -->
        <div class="col-12 col-sm-3 custom-col">
          <a href="#" class="text-blue custom-logo"><p>My Prortfolio</p></a>
        </div>

        <!-- Colonne de la navigation principale (6 colonnes) -->
        <div class="col-12 col-sm-9 col-lg-6 mw-100">
          <nav>
          <router-link to="/">Home</router-link> 
          <router-link to="/about">About Us</router-link>
          <router-link to="/Protfolio">Protfolio</router-link>
          <router-link to="/Project">Project</router-link>
          <router-link to="/Gallery">Gallery</router-link>
          <router-link to="/Contact">Contact</router-link>
          
        </nav>
        </div>

        <!-- Colonne des boutons (4 colonnes) -->
        <div class="col-12 m-4 m-lg-auto col-lg-3  custom-col custom-col2">
          <input
            v-if="isSearchInputVisible"
            type="text"
            class="form-control custom-width"
            placeholder="Recherche..."
            @blur="hideSearchInput"
          />

          <button
            @click="toggleSearchInput"
            class="btn"  >
            <b-icon icon="search" class="mr-1" />
          </button>

          <b-button variant="outline-success" id="btn-get-started" >GET STARTED</b-button>
        </div>
      </div>
      </div>

      <router-view></router-view>
      
    
  </div>

  

</template>

<script>
/* eslint-disable no-unused-vars */
export default {

  // ... Autres propriétés du composant ...

  data() {
    return {
      isSearchInputVisible: false,
      isFixed : false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleSearchInput() {
      this.isSearchInputVisible = !this.isSearchInputVisible;
    },
    hideSearchInput() {
      this.isSearchInputVisible = false;
    },

    
    handleScroll() {
      // Vous pouvez ajuster la valeur de défilement souhaitée (par exemple, 100 pixels).
      
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (scrollY >100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
}
</script>

<style scoped>
@import './assets/CSS/app_vue.css'
</style>

