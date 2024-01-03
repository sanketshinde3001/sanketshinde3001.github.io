let lines = document.getElementById("menub");
let leftmenu = document.getElementById("mobilenav");

lines.addEventListener('click',()=>{
    leftmenu.classList.toggle('-translate-x-full')
})