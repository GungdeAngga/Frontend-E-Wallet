<template>

      <div class="HeaderWeb">
          <span>Corsair</span>

          <router-link to="/" tag="button" class="btn" >
            <img src="@/assets/image/interrogation-free-icon-font.png" alt="support" style=" width: 100%">
          </router-link>
      </div>
  
</template>>

<script>


export default {
name: "HeaderWeb",
  components: {

}
};
</script>

<style scoped>
.HeaderWeb{
  overflow: hidden;
  background-color: #4E44CE;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 40%;
  height: 90px;
  padding-top: 50px;
}

span{
  color: #ffffff;
  font-size: 32px;
}

.btn{
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  margin-left: 200px;
}
</style>
