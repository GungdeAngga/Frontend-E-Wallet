<template>
    <div class="TopUpPage">
    <HeaderWeb />
    <TransferContent />
    <FooterMenuWeb />

    </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterMenuWeb from "../components/FooterMenuWeb.vue";
import TransferContent from "../components/TransferContent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    FooterMenuWeb,
    TransferContent
  },
};
</script>