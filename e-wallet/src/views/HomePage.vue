<template>
  <div class="HomePage">
    <HeaderWeb />
    <MainContateWeb />
    <FooterMenuWeb />
  </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import MainContateWeb from "../components/MainContateWeb.vue";
import FooterMenuWeb from "../components/FooterMenuWeb.vue";


export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    MainContateWeb,
    FooterMenuWeb
},
};

</script>

<style scoped>

</style>