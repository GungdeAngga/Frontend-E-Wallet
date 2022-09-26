<template>
<div class="footer">
        <div class="bgFooter">
            <div class="footerContent">
                <div class="btn-group" style="width:100%">

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/home-free-icon-font.png" alt="home" style="height: 45%;">
                        <span class="caption">Home</span>
                    </router-link>

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/time-past-free-icon-font.png" alt="Transfer" style="height: 45%;">
                        <span class="caption">History</span>
                    </router-link>

                    <router-link to="/" tag="button" class="btn" >
                        <img src="@/assets/image/portrait-free-icon-font.png" alt="Account" style="height: 45%;">
                        <span class="caption">Account</span>
                    </router-link>
                    </div>

                </div>    
        </div>


</div>
</template>

<script>

</script>

<style scoped>
#footer{
  position: absolute; 
  bottom:0; 
  width:100%;
  
}

.bgFooter{
    background-color: #484848;
}

.footerContent{
    margin: auto;
    width: 600px;
}

.btn{
    background-color: transparent;
    height: 113px;
    width: 200px;
}

.caption {
    display: block;
    padding-top: 5px;
}

.btn-group button {
    margin-top: 1px;    
    background-color: #222324; /* black background */
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
    background-color: #030506;
}
</style>