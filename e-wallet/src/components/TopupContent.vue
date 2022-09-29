<template>
    <div class="ContentTopup">

        <div class="bgContentTopup">

            <div class="ContentTopupView">

<!--isi apollo query-->

                <span class="textTopup">Topup</span><br> 
                <span class="balanceTopup">Cash: Rp 1.000.000</span> <br/><br/><!--yg di ubah ke apollo query-->

<!--penutup apollo query-->


                <!--nambah jumlah uang sesuai yang user mau-->
                <div class="error" v-if="!isValid">Please use number only</div>
                <input type="text" id="topup" name="topup" min="0" v-model="topup" placeholder="Rp 0" @input="change($event)"
                @change="change($event)">  

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
export default {
    name: "ValidateNumber",
    data() {
    return {
        topup: "",
        isValid: true,
        regex: /[0-9]/
        };
    },
    methods: {
        change:function(e){
            const number = e.target.value
            this.isNumberValid(number);
        },
        isNumberValid: function(inputNumber) {
            this.isValid=   this.regex.test(inputNumber)
        }
    },
};
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
    width: 600px;
    min-height: 74.9vh;
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

input[type=text], select {
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

.error{
  color:red;
}
</style>