<template>
    <div   class="view-margin">
        <ContactComponent />
        <FooterComponent />
    </div>
</template>
<script>
// import ContactComponent from '@/components/ContactComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: "ContactView",
    components : {
        ContactComponent,
        FooterComponent
    }
}
</script>
<style>
@import "../assets/CSS/view.css";
</style>