<template>
  <div>
    <div class="text-black-50 mb-5">
      <h1>Contact us</h1>
    
    <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit </p>
    </div>
    <b-container container-fluid class="mb-5">
      <b-row>
        <b-col cols="6">
          <iframe
            class="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
            width="520"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </b-col>

        <!-- Form -->
        <b-col cols="6" class="border border-1 shadow-sm">
          <div>
            <b-form class="text-start">
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="mb-3 mt-5"
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  v-model="text_form"
                  placeholder="Name"
                  class="custom-input text-black-50"
                  required
                  maxlength="10"
                ></b-form-input>
                <div class="text-end  text-black-50">
                  
                    {{ text_form.length }} / 10
                </div>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                class="mb-5"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  placeholder="Email "
                  class="custom-input text-black-50"
                  required
                ></b-form-input>
              </b-form-group>


              <!-- Text area -->
              <b-form-textarea
                id="textarea"
                
                placeholder="Message"
                rows="5"
                no-resize
                class="custom-input mb-3 text-black-50"
                ></b-form-textarea>

                <b-button variant="SEND" class="custom-button1 send-button">SEND</b-button>

            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
  data( ) {

    return{
        text_form : "",
    }
  },

 
};
</script>
<style>
@import "../assets/CSS/container.css";
</style>
