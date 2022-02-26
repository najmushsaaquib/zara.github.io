localStorage.removeItem("purchaseData")
var data = JSON.parse(localStorage.getItem("data")) || []
// first function which map all elements into the first basic page: this function is called as "visible"
// Due to limited data we are using grid method to show them in a representable way.
visible()
function visible()
{
    document.querySelector("#viewAll").style.fontWeight = "bold"
    document.querySelector("#container").innerHTML = ""


    data.map(function (elem) {
    var box= document.createElement("div")
    var img = document.createElement("img")
    var name = document.createElement("p")
    var innerContainer = document.createElement("div")
    var price = document.createElement("p")
        img.addEventListener("click", function () {
        purchase(elem)
        });

        box.setAttribute("class", elem.class)
        box.style.gridArea= elem.class
        img.src = elem.img
        name.innerText = elem.name
        price.innerText = "₹" + elem.price
        innerContainer.style.fontFamily = "sans-serif"
        innerContainer.style.fontSize = "12px"
        innerContainer.style.color = "rgb(97, 94, 94)"
        innerContainer.append(name,price)
        innerContainer.style.display = "flex"
        innerContainer.style.justifyContent = "space-between"

        box.append(img,innerContainer)
        document.querySelector("#container").append(box)
    })
}

function purchase(elem)
{
    var loginData = JSON.parse(localStorage.getItem("loginData")) || []
    if (loginData.length != 0) {
        elem["count"] = 1
        localStorage.setItem("purchaseData", JSON.stringify(elem))
        window.location.href = "/pages/purchase.html"
    }
    else {
        alert("Login to continue")
        window.location.href = "/pages/login.html"
        localStorage.setItem("purchaseData", JSON.stringify(elem))
    }
}

document.querySelector("#viewAll").addEventListener("click", function () {
    visible()
})
document.querySelector("#men").addEventListener("click", function () {
    window.location.href = "/pages/men.html"
})
document.querySelector("#women").addEventListener("click", function () {
    window.location.href = "/pages/women.html"
})
document.querySelector("#kids").addEventListener("click", function () {
    window.location.href = "/pages/kids.html"
})


// ad pop up script
window.addEventListener("load", function(){
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
            document.querySelector(".popup").style.opacity = "1"
            document.querySelector(".popup").style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        },
        1000 
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
