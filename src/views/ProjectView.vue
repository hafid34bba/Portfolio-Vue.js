<template>
    <div class="view-margin">
        <ProjectComponent />
        <FooterComponent />
    </div>
</template>
<script>
import ProjectComponent from '../components/ProjectComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {

    name : "ProjectView",
    components : {
        ProjectComponent,
        FooterComponent
    }

}
</script>
<style>
@import "../assets/CSS/view.css";
</style>