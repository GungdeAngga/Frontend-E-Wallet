<template>
    <div class="ContentTopup">
        <div class="bgContentTopup">
            <div class="ContentTopupView">
                <span class="textTopup">Topup</span><br> 
                <span class="balanceTopup">Cash: Rp 1.000.000</span> <br/><br/>

                <!--nambah jumlah uang sesuai yang user mau-->
                <input type="tel" id="topup" name="topup" min="0" v-model="money" placeholder="Rp 0">  

                <span style="margin-left:33%">   
                <v-btn depressed large
                dark color="#4E45CE"
                width="185px"
                height="55px">
                    Topup
                </v-btn></span>

            </div>

        </div>

    </div>




</template>

<script>

</script>

<style scopped>
#MContentTopup{

    height: 100%;
    display: flex;
}

.bgContentTopup{
    background-color: #484848;
}

.ContentTopupView{
    background: #2C2D30;
    margin: auto;
    padding: 30px;
    padding-bottom: 406px;
    width: 600px;
    height: 100%;
}

span{
    color: #ffffff;
}

.textTopup{
    font-size: 20px;
}

.balanceTopup{
    font-size: 30px;
}

input[type=tel], select {
  width: 100%;
  padding: 35px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 1px;
  box-sizing: border-box;
  background: #D9D9D9;
  font-size: 40px;
  margin-bottom: 20px;
}

::placeholder {
  color: black;
  font-size: 40px;
}

</style>