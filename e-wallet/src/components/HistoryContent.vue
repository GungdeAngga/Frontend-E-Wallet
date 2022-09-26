<template>
    <div class="HistoryContent">
        <div class="bgContentHistory">
            <div class="ContentHistory">

                <span class="TextTitle">History</span>

                <div class="HistoryList">
                    <p class="textHistory">Angga Aditya</p>
                    <p class="moneyHistory">RP 500.000</p><br> 
                    <p class="HistoryStatus">Transfer Keluar</p> 
                </div>

                <div class="HistoryList">
                    <p class="textHistory">Liberta</p>
                    <p class="moneyHistory">RP 500.000</p><br> 
                    <p class="HistoryStatus">Transfer Masuk</p> 
                </div>


            </div>

        </div>

    </div>




</template>

<script>

</script>

<style scopped>
#HistoryContent{

    height: 100%;
    display: flex;
}

.bgContentHistory{
    background-color: #484848;
}

.ContentHistory{
    background: #2C2D30;
    margin: auto;
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 415px;
    width: 600px;
    height: 100%;
}

span{
    color: #ffffff;
}

.TextTitle{
    font-size: 30px;
    padding-left: 43%;
}

.textHistory{
    font-size: 40px;
    padding-top: 15px;
}

.moneyHistory{
    font-size: 40px;
    padding-left: 300px;
    margin-top: -45px;
}

.HistoryStatus{
    font-size: 20px;
    margin-top: -20px;
    padding-bottom: 15px;
}

.HistoryList{
    border: 1px solid #ffffff;
    padding: 10px;
    background: #D9D9D9;

}
</style>