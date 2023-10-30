<template>
    <div  class="view-margin">
        <GalleryComponent />
        <FooterComponent />
    </div>
</template>
<script>
import GalleryComponent from '@/components/GalleryComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name : "GalleryView",
    components : {
        GalleryComponent,
        FooterComponent
    }
    
}
</script>
<style>
@import "../assets/CSS/view.css";
</style>