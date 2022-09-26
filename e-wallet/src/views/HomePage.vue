<template>
  <div class="HomePage">
    <HeaderWeb />
    <MainContateWeb />
    
  </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import MainContateWeb from "../components/MainContateWeb.vue";


export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    MainContateWeb
},
};

</script>

<style scoped>

</style>