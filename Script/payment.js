  // document.querySelector("#form").addEventListener("submit",signUpfun)
// var credArr = JSON.parse(localStorage.getItem("credentials")) || [];
function continueForm(){
    var loginData = JSON.parse(localStorage.getItem("loginData")) || []
    var card2 = document.querySelector("#card2").value;
    var date = document.querySelector("#date").value;
    var cholder = document.querySelector("#cholder").value;
    var cvv = document.querySelector("#cvv").value;
    
    // var credObj = {
    //   card:card,
    //   date:date,
    //   cholder:cholder,
    //   cvv:cvv

    // };
    // credArr.push(credObj);
    // console.log(credArr);
    // localStorage.setItem("credentials",JSON.stringify(credArr));
    
      
  if (loginData.length != 0) {
    if (cvv.length == 3 && card2.length== 12 && date!= "" && cholder!="")
      {
        window.location.href="otp.html";
      }
          else {
            alert("Wrong credentials, please ensure you give 3 digit cvv number & 12 digit card number")
      }
      }
  else {
    alert("Login to continue")
        window.location.href = "/Pages/login.html"
      }
}
  localStorage.removeItem("purchaseData")