<template lang="">
    <div>
        <b-container fluid class="col-12 custom-container-about">
            <b-row> 

                <b-col > 
                    <b-img
              :src="require('../assets/images/meeting.jpg')"
              fluid-grow
              alt="Responsive image"
            ></b-img>
                </b-col>

                <b-col class="  costum-container custom-col-about">

                    <div style="padding-left:20px;" > <h2> About Us </h2> </div>

                    <div style="padding-bottom:15px;"> <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst
            </p> </div>

            <ul>
                <li> <font-awesome-icon class="check-icon"  icon="fa-solid fa-check-double" /> Lorem ipsum dolor sit amet consecteteur adipiscing</li>
                <li> <font-awesome-icon class="check-icon" icon="fa-solid fa-check-double" /> Lo amet consecteteur adipiscing </li>
                <li> <font-awesome-icon  class="check-icon"  icon="fa-solid fa-check-double" /> Lorem ipsum dolor sit amet </li>
            </ul>

            <div class="lorem-ipsum-2">
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst
             </p>
            </div>



                </b-col>
            </b-row>

        </b-container>
        
    </div>
</template>
<script>
export default {
  name: "about-component",
};
</script>
<style>
@import "../assets/CSS/image.css";
@import "../assets/CSS/container.css";

@import "../assets/CSS/button.css";
@import "../assets/CSS/text.css";
@import "../assets/CSS/icon.css";
</style>