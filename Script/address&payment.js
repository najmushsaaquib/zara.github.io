function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

//   document.querySelector("1st").addEventListener("click",Optfunction)

  

var totalDiv =document.querySelector("#total>p")
var arr = JSON.parse(localStorage.getItem("totalPrice"))
totalDiv.innerText = "TOTAL BILL : ₹"+arr
// document.querySelector("#form").addEventListener("submit",signUpfun)
// var credArr = JSON.parse(localStorage.getItem("credentials")) || [];
function continueForm(){
//    var optn1 = document.querySelector("#1sto").value;
//    var optn2 = document.querySelector("#2ndo").value;
var chose = document.querySelector("#textAddress").value;
// if(value=="one"){
    var loginData = JSON.parse(localStorage.getItem("loginData")) || []
    if (loginData.length != 0) {
        if (chose == "") {
            alert("Delivery details not filled")
        }
        else {
        
            window.location.href = "/Pages/payment.html";
        }
    }
    else {
        alert("We Think you have logged out, please login to continue")
        window.location.href = "/Pages/login.html"
    }

    
// }
 
    };
    
        localStorage.removeItem("purchaseData")



