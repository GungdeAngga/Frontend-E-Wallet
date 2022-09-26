<template>


    <div>
        <v-app-bar
          color="#4E45CE"
          padless
          dark
          style="height: 140px;"
        >
          <div class="header">
            <span class="headerText">Corsair</span>

            <v-spacer></v-spacer>

          <router-link to="/" tag="button" class="btn" >
          <img src="@/assets/image/interrogation-free-icon-font.png" alt="support" style=" width: 100%">
          </router-link>

            
          </div>
        </v-app-bar>
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
.header{
  width: 100%;
  display: flex;
  padding-top: 50px;
  padding-left: 33.5%;
}

.headerText{
  font-size: 32px;
}

.btn{
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  margin-left: 200px;
  margin-right: 50.5%;
}
</style>
