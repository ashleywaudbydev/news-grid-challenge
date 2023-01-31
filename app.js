//-----------VARIABLES----------\\
const toggler = document.querySelector("#open");
const CloseToggler = document.querySelector("#close");
const menu = document.querySelector("#flex-nav");
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const body = document.querySelector("body");

//-----------OPEN BUTTON FUNCTION----------\\
toggler.addEventListener("click", function(){
   menu.classList.add("active");
   menu.classList.remove("flex-nav");
   openButton.classList.add("open")
   closeButton.classList.add("x")
   body.classList.add("flow");
})

//-----------CLOPSE BUTTON FUNCTION----------\\
CloseToggler.addEventListener("click", function(){
   menu.classList.remove("active");
   menu.classList.add("flex-nav");
   openButton.classList.remove("open")
   closeButton.classList.remove("x")
   body.classList.remove("flow");
})