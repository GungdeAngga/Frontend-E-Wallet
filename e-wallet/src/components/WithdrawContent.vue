<template>
    <div class="ContentWithdraw">
        <div class="bgContentWithdraw">
            <div class="ContentWithdrawView">

<!--isi apollo query-->

                <span class="textWithdraw">Withdraw</span><br> 
                <span class="balanceWithdraw">Cash: Rp 1.000.000</span> <br/><br/><!--yg di ubah ke apollo query-->

<!--penutup apollo query-->

                <!--nambah jumlah uang sesuai yang user mau-->
                <div class="error" v-if="!isValid">Please use number only</div>
                <input type="text" id="topup" name="topup" min="0" v-model="withdraw" placeholder="Rp 0" @input="change($event)"
                @change="change($event)">  

                <span style="margin-left:33%">   
                <v-btn depressed large
                dark color="#4E45CE"
                width="185px"
                height="55px">
                    Withdraw
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
        withdraw: "",
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
#MContentWithdraw{

    height: 100%;
    display: flex;
}

.bgContentWithdraw{
    background-color: #484848;
}

.ContentWithdrawView{
    background: #2C2D30;
    margin: auto;
    padding: 30px;
    width: 600px;
    min-height: 74.9vh;
}

span{
    color: #ffffff;
}

.textWithdraw{
    font-size: 20px;
}

.balanceWithdraw{
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