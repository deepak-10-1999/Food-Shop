var menu = document.querySelector("#menuu");
var closei = document.querySelector("#close-icon");
var content = document.querySelector(".content");
var a= document.querySelector("li");

menu.addEventListener("click",function(){
    content.style.right = 0;
    menu.style.display = "none";
    closei.style.display = "block";
})
closei.addEventListener("click",function(){
    content.style.right = "-120%";
    menu.style.display = "block";
    closei.style.display = "none";
})
a.addEventListener("click",function(){
    content.style.right = "-120%";
    menu.style.display = "block";
    closei.style.display = "none";
})
