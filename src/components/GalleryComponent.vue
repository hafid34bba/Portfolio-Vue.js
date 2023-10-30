<template>
  <div>
    <div class="text-black-50 mb-4">
      <h1>Gallery 1</h1>
    </div>

    <div class="d-flex justify-content-center align-items-center mb-5">
      <b-carousel
        id="carousel-1"
        controls
        indicators
  
        background="#ababab"
        class="w-75 h-50"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          v-for="index in 5"
          :key="index"
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
          
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallery-component",
};
</script>
<style></style>
