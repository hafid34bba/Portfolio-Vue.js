<template lang="">
  <div>
    <b-container fluid class="col-12">
      <b-row>
        <b-col class="col-12 col-md-5  custom-text costum-container custom-col-welcome">
          <div ><h1>Welcome to our page 1</h1></div>
          <div>
            <p class="text-ipsum">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst
            </p>
          </div>
          <div class="custom-button-group">
            <b-button class="custom-button custom-button1"
              >GET STARTED</b-button
            >
            <b-button class="custom-button custom-button2 ">
                <font-awesome-icon icon="fa-solid fa-circle-play" size="xl" />
              WATCH VIDEO</b-button
            >
          </div>
        </b-col>

        <b-col class="col-12 col-md-5 image-container">
          <div>
            <b-img
              :src="require('../assets/images/colab.jpg')"
              fluid-grow
              alt="Responsive image"
            ></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "welcome-component",
};
</script>
<style>
@import "../assets/CSS/button.css";
@import "../assets/CSS/image.css";
@import "../assets/CSS/container.css";
@import "../assets/CSS/text.css";

</style>
