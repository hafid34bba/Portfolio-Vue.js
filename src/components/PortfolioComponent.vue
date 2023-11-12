<template lang="">
  <div>
    <!-- Intro -->
    <div class="text-titles text-black-50"><h2>Portfolio</h2></div>

    <div class="text-titles">
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    </div>

    <!-- buttons -->
    <div class="mb-4">
        <button
      v-for="(button, index) in buttons"
      :key="index"
      @click="changeButtonColor(button)"
      :class="{'custom-ml': true, 'custom-button': true, 'custom-button-port': true, 'active-button': button.isActive }"
    >
      {{ button.label }}
    </button>    

    </div>


    <!-- Images -->
    <b-container container-fluid class="col-12 mb-5">
      <b-row >
        <b-col v-for="index in 4" :key="index" class="col-12 col-md-3" :class="{ 'ml-2': index > 1 }">
          <b-img
          :src="activeImage"
            fluid-grow
            alt="Responsive image"
            
          ></b-img>
          <div class="bottom-left">{{activeTypeProject}} {{index}}</div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col v-for="index in 3" :key="index"  :class="{ 'col-12':true, 'col-md-3':true, 'ml-2': index > 1 }">
          <b-img
            :src="activeImage"
            fluid-grow
            alt="Responsive image"
          ></b-img><div class="bottom-left">{{activeTypeProject}} {{index+4}}</div>

        </b-col>
      </b-row>
    </b-container>


  </div>
</template>
<script>
export default {
  name: "portfolio-component",
  data() {
    return {
      buttons: [
        { label: "Web App", isActive: true },
        { label: "Mobile App", isActive: false },
        { label: "Desktop App", isActive: false },
      ],
      activeButtonIndex: null,

      images: [
        { label : "Web App", image: "phoneDT3.jpg"},
        { label : "Mobile App", image: "phoneDT4.jpg"},
        { label : "Desktop App", image: "phoneDT5.jpg"},
      ], 

        activeTypeProject : "Web App",
    //   activeImage : require("../assets/images/phoneDT3.jpg"),

    };
  },

  //computed methods, mise à jour dynamique

  computed: {
    activeImage() {
      if (this.activeButtonIndex !== null) {
        return require(`../assets/images/${this.images[this.activeButtonIndex].image}`);
      }
      return require("../assets/images/phoneDT3.jpg"); // Vous pouvez définir une image par défaut ici
    },
  },


  methods: {
    changeButtonColor(clickedButton) {
      if (this.activeButtonIndex !== null) {
        this.buttons[this.activeButtonIndex].isActive = false;
      }else{
        this.buttons[0].isActive = false;
      }
      clickedButton.isActive = true;
      this.activeButtonIndex = this.buttons.indexOf(clickedButton);
    this.activeTypeProject =  this.buttons[this.activeButtonIndex].label;
    },
  },
};
</script>
<style>
@import "../assets/CSS/image.css";
@import "../assets/CSS/container.css";

@import "../assets/CSS/button.css";
@import "../assets/CSS/text.css";
@import "../assets/CSS/icon.css";
</style>
