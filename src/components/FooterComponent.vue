<template>
  <div class="custom-footer fluid">
    <div class="custom-logo fw-bold mt-4 mb-4">
      <h1 class="fw-bold">My Portfolio</h1>
    </div>

    <div>
        <font-awesome-icon icon="fa-brands fa-facebook" class="fa-2x" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="fa-2x margin-icon"/>
        <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2x margin-icon"/>
        <font-awesome-icon icon="fa-brands fa-instagram" class="fa-2x margin-icon"/>
    </div>
    <div class="mt-3">
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna<br>
              consequat felis vehicula class ultricies mollis dictumst</p>
    </div>

    <!-- subscribe form -->
    <div class="d-flex justify-content-center">
        <b-form >
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="mb-3 mt-2 text-start"
                
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  v-model="text_form"
                  placeholder="Email"
                  class="custom-subscribe"
                  
                  required
                  
                ></b-form-input>
                </b-form-group>

                <b-button variant="SEND" class="custom-button1 send-button subsribe-button">SUBSCRIBE US</b-button>
                </b-form>

    </div>

    
    <div class="bottom-element">
        <hr>
        <p>@Copyright Web Portfolio. All Rights Reserved 2023 - My Portfolio
            
        
            <span class="custom-float-right"> Designed By Abdelhafid ZEHAR</span>
            </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-component",
};
</script>
<style>
@import "../assets/CSS/container.css";
@import "../assets/CSS/text.css";
@import "../assets/CSS/app_vue.css";
@import "../assets/CSS/icon.css";

</style>
