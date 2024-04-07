//side navbar,menuIcon

var sidenav = document.getElementById("sidenav")
var menuIcon = document.getElementById("menuIcon")
var closenav = document.getElementById("closenav")

menuIcon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search function

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("Search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count = 0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})