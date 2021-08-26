<template>
  <div class="container mx-auto">
    <ShowcasingHeader />
    <AboutMeSection />
    <LatestPosts />
  </div>
</template>



<script>
import ShowcasingHeader from "../components/ShowcasingHeader.vue";
import AboutMeSection from "../components/AboutMeSection.vue";
import LatestPosts from "../components/LatestPost.vue";



export default {
  name: "Home",
  components: { ShowcasingHeader, AboutMeSection, LatestPosts },
};
</script>
