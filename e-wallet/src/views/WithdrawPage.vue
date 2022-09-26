<template>
    <div class="TopUpPage">
    <HeaderWeb />
    <WithdrawContent />
    <FooterMenuWeb />

    </div>
</template>

<script>
import HeaderWeb from "@/components/HeaderWeb.vue";
import FooterMenuWeb from "../components/FooterMenuWeb.vue";
import WithdrawContent from "../components/WithdrawContent.vue";

export default {
  name: "HomePage",
  components: {
    HeaderWeb,
    FooterMenuWeb,
    WithdrawContent
  },
};
</script>