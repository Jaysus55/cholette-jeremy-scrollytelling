let body = document.querySelector(".scrolltest");
 

window.addEventListener("scroll", function(){
body.classList.add("is-scrolling");
window.clearTimeout(timer);
timer = setTimeout(removeClass, 100);
});

let timer = setTimeout(removeClass, 100);

function removeClass(){
body.classList.remove("is-scrolling");
}