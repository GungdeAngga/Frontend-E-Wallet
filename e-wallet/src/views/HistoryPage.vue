<template>
    <div class="HomePage">
        <HeaderWeb />
        <HistoryContent />    
        <FooterMenuWeb />
    </div>
  </template>
  
<script>
    import HeaderWeb from "@/components/HeaderWeb.vue";
    import FooterMenuWeb from "../components/FooterMenuWeb.vue";
    import HistoryContent from "../components/HistoryContent.vue";
  
export default {
    name: "HomePage",
    components: {
        HeaderWeb,
        FooterMenuWeb,
        HistoryContent
    },
};  
</script>