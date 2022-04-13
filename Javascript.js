let NavbarUnderlineActive = document.querySelector(".NavbarUnderlineActive");
let GrowwProduct_StocksDetails = document.querySelector(".GrowwProduct_StocksDetails");
let GrowwProduct_MutualFundsDetails = document.querySelector(".GrowwProduct_MutualFundsDetails");
let GrowwProduct_UsStocksDetails = document.querySelector(".GrowwProduct_UsStocksDetails");
let GrowwProduct_FDsDetails = document.querySelector(".GrowwProduct_FDsDetails");


GrowwProduct_StocksDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-850px,60px)";
    document.querySelector(".StockActive").classList.add("Active1")


    /****Remove */
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".UsStockActive").classList.remove("Active3");
    document.querySelector(".FDActive").classList.remove("Active4");
})
GrowwProduct_MutualFundsDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "250px";
    NavbarUnderlineActive.style.transform = "translate(-650px,60px)";
   document.querySelector(".MutualFundActive").classList.add("Active2")

    /*remove*/
   document.querySelector(".StockActive").classList.remove("Active1")
   document.querySelector(".UsStockActive").classList.remove("Active3");
   document.querySelector(".FDActive").classList.remove("Active4");
})
GrowwProduct_UsStocksDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-380px,60px)";
    document.querySelector(".UsStockActive").classList.add("Active3");


    /***remove */
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".StockActive").classList.remove("Active1")
    document.querySelector(".FDActive").classList.remove("Active4");
})
GrowwProduct_FDsDetails.addEventListener("click",()=>{
    NavbarUnderlineActive.style.width  = "200px";
    NavbarUnderlineActive.style.transform = "translate(-180px,60px)";
    document.querySelector(".FDActive").classList.add("Active4");

    /*remove*/
    document.querySelector(".MutualFundActive").classList.remove("Active2")
    document.querySelector(".StockActive").classList.remove("Active1")
    document.querySelector(".UsStockActive").classList.remove("Active3");
})