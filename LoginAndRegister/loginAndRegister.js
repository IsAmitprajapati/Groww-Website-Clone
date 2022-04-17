let Groww_LoginRegisterClick = document.querySelector(".Groww_LoginRegister");
let IndexBody = document.getElementById("IndexBody");

Groww_LoginRegisterClick.addEventListener("click",()=>{
    console.log("Button Active")
    
    let LoginContainer = document.createElement("div");
    LoginContainer.classList.add("LoginAndRegisterContainer");
    IndexBody.appendChild(LoginContainer);

    //main body of login page
    let LoginBody = document.createElement("div");
    LoginBody.classList.add("LoginBody");
    LoginContainer.appendChild(LoginBody);


    //left side of login page
    let LoginBodyLeft = document.createElement("div");
    LoginBodyLeft.classList.add("LoginBodyLeft");
    LoginBody.appendChild(LoginBodyLeft);

    //left side inner Element
    let LoginBodyLefth2 = document.createElement("h1");
    LoginBodyLefth2.classList.add("LoginBodyLefth2");
    LoginBodyLefth2.textContent = "Simple, Free Investing.";
    LoginBodyLeft.appendChild(LoginBodyLefth2);

    //left side innner element bottom container
    let LoginBodyLeftBottom = document.createElement("div");
    LoginBodyLeftBottom.classList.add("LoginBodyLeftBottom");
    LoginBodyLeft.appendChild(LoginBodyLeftBottom);

    //left side inner element bottom Animation box
    let LoginBodyLeftBottomAnimation = document.createElement("div");
    LoginBodyLeftBottomAnimation.classList.add("LoginBodyLeftBottomAnimation");
    LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomAnimation);

    let LoginBodyLeftBottomText = document.createElement("h2");
    LoginBodyLeftBottomText.classList.add("LoginBodyLeftBottomText");
    
        let TextContentDisplay = ["Direct Mutual Funds", "ETFs", "Gold",
                                    "US Stocks", "Fixed Deposits", "Stocks"];

        
        let num = 0;
        LoginBodyLeftBottomText.textContent =  TextContentDisplay[num];
        function ChangeText(){
            if(num != 6){
                LoginBodyLeftBottomText.textContent =  TextContentDisplay[num];
                num++;
            }
            else{
                num = 0;
            }   
        }
        setInterval(ChangeText,3000);
    LoginBodyLeftBottom.appendChild(LoginBodyLeftBottomText);
    
    //Right side of login page
    let LoginBodyRight = document.createElement("div");
    LoginBodyRight.classList.add("LoginBodyRight");
    LoginBody.appendChild(LoginBodyRight);
    
    //right side of login page Heading
    let LoginBodyRighth1 = document.createElement("h2");
    LoginBodyRighth1.classList.add("LoginBodyRighth1");
    LoginBodyRighth1.textContent = "Welcome To Groww";
    LoginBodyRight.appendChild(LoginBodyRighth1);

    // Right Side login page Google login
    let LoginBodyRightGoogleConTainer = document.createElement("div");
    LoginBodyRightGoogleConTainer.classList.add("LoginBodyRightGoogleConTainer");
    LoginBodyRight.appendChild(LoginBodyRightGoogleConTainer);

    let LoginBodyRightGoogleConTainerImg = document.createElement("div");
    LoginBodyRightGoogleConTainerImg.classList.add("LoginBodyRightGoogleConTainerImg");
    LoginBodyRightGoogleConTainer.appendChild(LoginBodyRightGoogleConTainerImg);

    let LoginBodyRightGoogleConTainerText = document.createElement("div");
    LoginBodyRightGoogleConTainerText.classList.add("LoginBodyRightGoogleConTainerText");
    LoginBodyRightGoogleConTainerText.textContent = "Continue with Google"
    LoginBodyRightGoogleConTainer.appendChild(LoginBodyRightGoogleConTainerText);





    




})