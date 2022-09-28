<template>
    <div class="TopUpPage">
    <HeaderWeb />
    <TopupContent />
    <FooterMenuWeb />

    </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterMenuWeb from "../components/FooterMenuWeb.vue";
import TopupContent from "@/components/TopupContent.vue";


export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    FooterMenuWeb,
    TopupContent
},
};
</script>