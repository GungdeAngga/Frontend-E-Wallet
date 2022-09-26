<template>
    <div class="MainContent">
        <div class="bgContent">
            <div class="Content">
                <span class="text">Account Balance</span><br> 
                <span class="balance">Rp 1.000.000</span> 

                <div class="btn-group" style="width:100%">

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/add-free-icon-font.png" alt="topup" style="height: 65%;">
                        <span class="caption">Topup</span>
                    </router-link>

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/paper-plane-free-icon-font.png" alt="transfer" style="height: 65%;">
                        <span class="caption">Transfer</span>
                    </router-link>

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/money-bill-wave-free-icon-font.png" alt="withdraw" style="height: 65%;">
                        <span class="caption">withdraw</span>
                    </router-link>

                </div>

            </div>

        </div>

    </div>




</template>

<script>

</script>

<style>
#MainContent{

    height: 100%;
    display: flex;
}

.bgContent{
    background-color: #484848;
}

.Content{
    background: #2C2D30;
    margin: auto;
    padding: 30px;
    padding-top: 60px;
    padding-bottom: 473px;
    width: 600px;
    height: 100%;
}

span{
    color: #ffffff;
}

.text{
    font-size: 20px;
}

.balance{
    font-size: 40px;
}

.btn{
    background-color: transparent;
    height: 80px;
    width: 180px;
}

.caption {
    display: block;
    padding-top: 5px;
}

.btn-group button {
    margin-top: 30px;    
    background-color: #4E44CE; /* purple background */
    color: white; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
    content: "";
    clear: both;
    display: table;
}

.btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
    background-color: #1E1774;
}
</style>