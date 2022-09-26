<template>
    <div class="TopUpPage">
    <HeaderWeb />
    <ContentTopup />
    <FooterMenuWeb />

    </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterMenuWeb from "../components/FooterMenuWeb.vue";
import ContentTopup from "../components/ContentTopup.vue";


export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    FooterMenuWeb,
    ContentTopup
},
};

</script>


<style scoped>

</style>