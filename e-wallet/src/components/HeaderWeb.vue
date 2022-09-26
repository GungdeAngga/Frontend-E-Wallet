<template>
  <fixed-header>
      <div class="HeaderWeb">
          <h2>Corsair</h2>
      </div>
  </fixed-header>    
</template>>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
name: "HeaderWeb",
  components: {
  FixedHeader
}
};
</script>

<style scoped>
.navbar.vue-fixed-header--isFixed {
position: fixed;
left: 0;
top: 0;
width: 100vw;
}
</style>
