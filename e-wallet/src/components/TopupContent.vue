<template>
    <div class="ContentTopup">

        <div class="bgContentTopup">

            <div class="ContentTopupView">

                <span class="textTransfer">Topup</span><br> 

                <!--isi apollo query-->
               <ApolloQuery
                :query="gql => gql`
                    query MyQuery {
                    tabel_account_balance(where: {}) {
                        id
                        uang
                        }
                    }`"
                    >
                <template v-slot="{ result: {  data } }">
                <span class="balanceTransfer">Cash: Rp {{ data.tabel_account_balance[0].uang }}</span> <br/><br/> 
                </template>
                </ApolloQuery> -->
                <!--penutup apollo query-->

                <div class="errorInput" v-if="!isValid">Please use number only</div>

                <!--apollo mutation-->

                <apolloMutation
                :mutation="(gql) => gql`
                    mutation MyMutation($uang: numeric = ) {
                    update_tabel_account_balance_by_pk(pk_columns: {id: 1}, _inc: {uang: $uang}) {
                        id
                        uang
                    }
                    }`"
                :variables="{ id: uang.id, name: topup }"
                :refetchQueries="refetchQueriesAfterMyMutation"
                >
                <template v-slot="{ mutate, loading, error }">
                <input 
                type="text" 
                min="0" 
                v-model="topup" 
                placeholder="Rp 0" 
                @keyup.enter="mutate()"
                @input="change($event)"
                @change="change($event)">  <!--nambah jumlah uang sesuai yang user mau-->

                <span style="margin-left:33%">   
                <v-btn depressed large
                dark color="#4E45CE"
                width="185px"
                height="55px"
                :disabled="loading"
                @click="mutate()">
                    Topup
                </v-btn></span>
                <p v-if="error">An error occurred: {{ error }}</p>
                </template>
                </apolloMutation>

                <!--apollo mutation-->

            </div>

        </div>

    </div>




</template>

<script>
import gql from "graphql-tag";

export default {
    name: "ValidateNumber",
    props: {
        uang: Object,
    },
    data() {
    return {
        topup: "",
        isValid: true,
        regex: /[0-9]/
        };
    },
     mounted() {
        this.topup = this.uang.body;
    },
    computed: {
    refetchQueriesAfterMyMutation() {
      return [
            {
            query: gql`
                query MyQuery {
                    tabel_account_balance {
                    id
                    uang
                }
                }
            `,
            },
        ];
        },
    },
    methods: {
        change:function(e){
            const number = e.target.value
            this.isNumberValid(number);
        },
        isNumberValid: function(inputNumber) {
            this.isValid=   this.regex.test(inputNumber)
        },
        
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

.errorInput{
  color:red;
}
</style>