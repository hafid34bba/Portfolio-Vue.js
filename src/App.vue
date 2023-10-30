<template>
  <div id="app">
    <div  class="container-fluid nav-custom">
      <!-- L'intérieur de la barre de navigation -->
      <div class="row">
        <!-- Colonne du logo (2 colonnes) -->
        <div class="col-3 custom-col">
          <a href="#" class="text-blue custom-logo"><p>My Prortfolio</p></a>
        </div>

        <!-- Colonne de la navigation principale (6 colonnes) -->
        <div class="col-6">
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
        <div class="col-3 custom-col custom-col2">
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

      <router-view/>
      
    
  </div>

  

</template>

<script>
/* eslint-disable no-unused-vars */
export default {

  // ... Autres propriétés du composant ...

  data() {
    return {
      isSearchInputVisible: false,
    };
  },
  methods: {
    toggleSearchInput() {
      this.isSearchInputVisible = !this.isSearchInputVisible;
    },
    hideSearchInput() {
      this.isSearchInputVisible = false;
    },
  },
}
</script>

<style scoped>
@import './assets/CSS/app_vue.css'
</style>

