<template lang="">
  <div>
    <!-- Projet Header -->
    <div class="text-black-50 mb-4">
      <h1>Projects</h1>
    </div>

    <!-- les cards -->

    <b-container fluid-container class="col-12">
      <b-row fluid class="text-left-custom mb-5">
        <b-col
          v-for="index in 3"
          :key="index"

          :class="{'col-12':true, 'col-md-4':true, 'ml-4': index > 1, 'mb-4': true,'text-left': true }"
          class = "d-flex flex-column align-items-center  d-md-block"
        >
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 22rem"
            class="mb-8"
          >
            <b-img :src="imagePath" class="image-project"></b-img>

            <b-card-title> Card Title</b-card-title>
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <hr>

            <b-button href="#" class="custom-button1">Go somewhere</b-button>
            <b-form-rating class="custom-rating" id="rating-inline" inline value="4.5"></b-form-rating>

          </b-card>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "project-component",
  data() {
    return {
      imagePath: require("../assets/images/prj.jpg"),
    };
  },
};
</script>
<style>
@import "../assets/CSS/image.css";
/* @import "../assets/CSS/container.css"; */

@import "../assets/CSS/button.css"; 
@import "../assets/CSS/text.css";
/* @import "../assets/CSS/icon.css"; */
</style>
