gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/*gsap.registerPlugin(DrawSVGPlugin);*/
/*gsap.registerPlugin(MorphSVGPlugin);*/


var CTA = gsap.from(".CTA" , {
    y:-50,
    opacity:0,
    duration:2,
    repeat:-1
  })



  



var ovni = gsap.from(".ovni" , {
  y:20,
  rotation:3,
  duration:1.5,
  repeat:-1,
  yoyo: true,
})


gsap.timeline({ scrollTrigger: {
  scrub: true,
  pin: true,
  start: 'top top',
  end: '500% bottom',
  trigger: 'header',
}})
/*.fromTo("#draw",{ drawSVG: "0% 0%" },{drawSVG: "0% 100%",duration: 300,ease: "power1.inOut"})*/
.from(".terre" , {rotation:360,duration:150,ease:"none",}) 






/*Chapitre1-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

gsap.timeline({ scrollTrigger: {
  scrub: true,
  pin: true,
  start: 'top top',
  end: '300% bottom',
  trigger: '#chapitre1',
}})
/*.to("#fleche", {duration: 100, morphSVG:{shape:"#sourire", shapeIndex:5}},'<')*/
.from(".planete02" , {rotation:360,duration:150,ease:"none"})
.from(".planete01" , {rotation:-360,duration:150,ease:"none"}, '<')
.to("#chapitre1", {backgroundPosition: "50% 100%",ease: "none",});

/*Chapitre2-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

gsap.timeline({scrollTrigger:{
  scrub: true,
  pin: true,
  start: 'top top',
  end: '500% bottom',
  trigger: '#chapitre2',  
}})
.from(".planete03" , {rotation:360,duration:150,ease:"none"})
.from(".planete04" , {rotation:-360,duration:150,ease:"none"},"<")
.from('.fusee', {motionPath: '#chemin',align: '#chemin', start: 0,end: 1,alignOrigin: [-0.5, -0.5],duration:100},"<")
/*Chapitre3-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

gsap.timeline({scrollTrigger:{
  scrub: true,
  pin: true,
  start: 'top top',
  end: '300% bottom',
  trigger: '#chapitre3',  
}})
.from(".planete05" , {
  rotation:-360,duration:150,ease:"none"
})  

let body = document.querySelector(".scroll");
 
window.addEventListener("scroll", function(){
body.classList.add("is-scrolling");
window.clearTimeout(timer);
timer = setTimeout(removeClass, 100);
});

let timer = setTimeout(removeClass, 100);

function removeClass(){
body.classList.remove("is-scrolling");
}

/*Chapitre4-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  var baleines = gsap.timeline({scrollTrigger:{
    pin: true,
    start: 'top top',
    end: '500% bottom',
    trigger: '#chapitre4',  
    toggleActions: 'play pause resume pause',
  }})
  .fromTo(".baleine.no1",  { x:"300%"},{ x:"-200%",duration:3,ease:"none",repeat:-1})
  .fromTo(".baleine.no2",  { x:"100%"},{ x:"-340%",duration:7,ease:"none",repeat:-1})
  .fromTo(".baleine.no3",  { x:"300%"},{ x:"-330%",duration:3,ease:"none",repeat:-1})
  .fromTo(".baleine.no4",  { x:"200%"},{ x:"-220%",duration:3,ease:"none",repeat:-1})
  .fromTo(".baleine.no5",  { x:"450%"},{ x:"-200%",duration:15,ease:"none",repeat:-1});

/*Chapitre5-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var asteroidPetit = gsap.timeline({scrollTrigger:{
  pin: true,
  start: 'top top',
  end: '300% bottom',
  trigger: '#chapitre5',  
  toggleActions: 'play pause reverse pause',
}})
.fromTo(".asteroid1", { x:"1100%",rotation:"0"},{ x:"-400%",rotation:"-360",duration:3 },"<0.25")
.fromTo(".asteroid2", { x:"1100%",rotation:"0"},{ x:"-300%",rotation:"-360",duration:3 },"<0.25")
.fromTo(".asteroid3", { x:"1400%",rotation:"0"},{ x:"-1700%",rotation:"-360",duration:3 },"<0.25")

/*Chapitre6-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

  var brisement = gsap.timeline({scrollTrigger:{
    scrub: true,
    pin: true,
    start: 'top top',
    end: '400% bottom',
    trigger: '#chapitre6',  
  }})
  .from(".planete.Briser1", { y:"-70%",duration:3}, "<0.5")
  .from(".planete.Briser2", { x:"400%",duration:3}, "<0.3")
  .from(".planete.Briser3", { y:"400%",duration:3}, "<0.4")
  .from(".planete.Briser4", { x:"-400%",duration:3}, "<0.5");    

  brisement.reverse(0);
/*Chapitre7-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const chapterHeight7 = document.getElementById("chapitre7").scrollHeight;

var asteroidGros = gsap.timeline({scrollTrigger:{
  scrub: true,
  pin: true,
  start: 'top top',
  end: '400% bottom',
  trigger: '#chapitre7',  
}})
.fromTo(".asteroid4", { x:"1100%",y:chapterHeight7 * (-1 * -.1),rotation:"0"},{ x:"-200%",rotation:"-360",duration:50 },"<0.25")
.fromTo(".asteroid5", { x:"1100%",rotation:"0"},{ x:"-800%",rotation:"-360",duration:50 },"<0.25")
.fromTo(".asteroid6", { x:"1400%",rotation:"0"},{ x:"-1700%",rotation:"-360",duration:50 },"<0.25")
.fromTo(".asteroid7", { x:"1100%",rotation:"0"},{ x:"-400%",rotation:"-360",duration:50 },"<0.25")
.fromTo(".asteroid8", { x:"1100%",y:chapterHeight7 * (-1 * .4),rotation:"0"},{ x:"-400%",rotation:"-360",duration:50 },"<0.25")
.fromTo(".asteroid9", { x:"1400%",y:chapterHeight7 * (-1 * .1),rotation:"0"},{ x:"-1700%",rotation:"-360",duration:50 },"<0.25");

gsap.to("#chapitre7", {
  backgroundPosition: "50% 20%",
  ease: "none",
  scrollTrigger: {
      trigger: "#chapitre7",
      start: "top bottom",
      end: "500% top",
      scrub: true,
      duration:100,
  }
});

/*Chapitre8-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var cthulu = gsap.from(".cthulu" , {
  x:20,
  opacity:0,
  duration:2,
  scrollTrigger:{
    scrub: true,
    pin: true,
    start: 'top top',
    end: '250% bottom',
    trigger: '#chapitre8',  
  }
})