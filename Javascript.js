let NavbarUnderlineActive = document.querySelector(".NavbarUnderlineActive");
let GrowwProduct_StocksDetails = document.querySelector(".GrowwProduct_StocksDetails");
let GrowwProduct_MutualFundsDetails = document.querySelector(".GrowwProduct_MutualFundsDetails");
let GrowwProduct_UsStocksDetails = document.querySelector(".GrowwProduct_UsStocksDetails");
let GrowwProduct_FDsDetails = document.querySelector(".GrowwProduct_FDsDetails");

/***change variable */
let ChangeImageAccordingNavigation = document.querySelector(".ChangeImageAccordingNavigation");
let ZeroText = document.querySelector(".ZeroText");
let InsideContent = document.querySelector(".InsideContent");
let stocksDetails_Text = document.querySelector(".stocksDetails_Text");

GrowwProduct_StocksDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-850px,60px)";
    document.querySelector(".StockActive").classList.add("Active1")


    /****Remove */
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".UsStockActive").classList.remove("Active3");
    document.querySelector(".FDActive").classList.remove("Active4");

    /**Change Content when Click */
    
    ChangeImageAccordingNavigation.src = "/ImageNavigation/stocks.png";
    ZeroText.textContent = "Zero";
    InsideContent.textContent = "account charges";
    stocksDetails_Text.textContent = "You don't have to pay  a single rupee for opening a stocks account or account maintenance."

})
GrowwProduct_MutualFundsDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "250px";
    NavbarUnderlineActive.style.transform = "translate(-650px,60px)";
   document.querySelector(".MutualFundActive").classList.add("Active2")


    /*remove*/
   document.querySelector(".StockActive").classList.remove("Active1")
   document.querySelector(".UsStockActive").classList.remove("Active3");
   document.querySelector(".FDActive").classList.remove("Active4");

    /**Change Content when Click */
    ChangeImageAccordingNavigation.src = "/ImageNavigation/MutualFunds.png";
    ZeroText.textContent = "0%";
    InsideContent.textContent = "commission";
    stocksDetails_Text.textContent = "Select from 5000+ direct mutual funds and get higher return than regular funds."


})
GrowwProduct_UsStocksDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-380px,60px)";
    document.querySelector(".UsStockActive").classList.add("Active3");


    /***remove */
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".StockActive").classList.remove("Active1")
    document.querySelector(".FDActive").classList.remove("Active4");

    /**Change Content when Click */
    ChangeImageAccordingNavigation.src = "/ImageNavigation/USStock.png";
    ZeroText.textContent = "Free";
    InsideContent.textContent = "account opening";
    stocksDetails_Text.textContent = "Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee."


})
GrowwProduct_FDsDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-180px,60px)";
    document.querySelector(".FDActive").classList.add("Active4");

    /*remove*/
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".StockActive").classList.remove("Active1")
    document.querySelector(".UsStockActive").classList.remove("Active3");

    /**Change Content when Click */
    ChangeImageAccordingNavigation.src = "/ImageNavigation/fd.png";
    ZeroText.textContent = "6.7%";
    InsideContent.textContent = "interest rate";
    stocksDetails_Text.textContent = "Open fixed deposit in any bank with higher interest rates without opening a bank account."



})
/************************************************************************************** */