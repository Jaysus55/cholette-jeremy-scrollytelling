gsap.from(".CTA" , {
    y:-50,
    opacity:0,
    duration:2,
    repeat:-1
  })



  gsap.from(".terre" , {
    rotation:-360,duration:150,repeat:-1,ease:"none"
  })  


/*let body = document.querySelector(".scroll");
 

window.addEventListener("scroll", function(){
body.classList.add("is-scrolling");
window.clearTimeout(timer);
timer = setTimeout(removeClass, 100);
});
  
let timer = setTimeout(removeClass, 100);
  
function removeClass(){
body.classList.remove("is-scrolling");
} */